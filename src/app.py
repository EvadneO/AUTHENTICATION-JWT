"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import datetime
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

#REGISTRO DE USUARIO
@app.route('/registro', methods=['POST'])
def registro_usuario():
    data = request.get_json()
    newUser = User()
    newUser.nombre = data['nombre']
    newUser.apellido = data['apellido']
    newUser.direccion = data['direccion']
    newUser.telefono = data['telefono']
    newUser.email = data['email']
    newUser.password = data['password']
    newUser.is_active = True
    db.session.add(newUser)
    db.session.commit()

    return jsonify({"mensaje": "Usuario registrado correctamente"})

#Generar el token si el usuario es válido 
@app.route('/login', methods=['POST'])
def iniciar_seccion():
    data = request.get_json()
    oneUser = User.query.filter_by(email=data['email'], password=data['password']).first()
    if (oneUser):
        expiracion = datetime.timedelta(minutes=1)
        acceso = create_access_token(identity={"email": oneUser.email, "password": oneUser.password, "is_active": oneUser.is_active}, expires_delta=expiracion)
        response = {"Token":acceso, "expiracion":expiracion.total_seconds(), "email":oneUser.email }
       
        return jsonify(response)
    else:
        return "no existe"

#Dirige a una ruta de acceso privado, despúes de generarse el token 
@app.route('/private', methods=['GET'])
@jwt_required()
def acceso_usuario():
    token = get_jwt_identity()
    return jsonify({"mensaje": "Bienvenido acceso concedido",
     "usuario": token})



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
