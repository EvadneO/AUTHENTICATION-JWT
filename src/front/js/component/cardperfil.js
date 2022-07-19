import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import evi from "../../img/evi.jpeg";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const CardPerfil = () => {
  const { store, actions } = useContext(Context);
  const [email, isAuthenticated, isLoading] = useState("");

  useEffect(() => {
    actions.perfilUsuario();
  }, []);

  let isLogged =
    sessionStorage.getItem("Token") !== "" && sessionStorage.getItem("Token");
  console.log(isLogged);

  if (isLoading) {
    return (
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="container">
      {isLogged ? (
        <div className="row">
          <div className="col-md-3">
            <img
              src={evi}
              className=""
              style={{ width: "8rem", borderRadius: "2rem" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <div
                className="title"
                style={{ textAlign: "left", marginTop: "1rem" }}
              >
                <h3>
                  <strong>Usuario</strong>
                  {store.usuarioActual?.nombre}
                </h3>
              </div>
              <h5
                className="card-text"
                style={{ fontFamily: "fantasy", marginTop: "1rem" }}
              >
                <strong>Correo: </strong>
                {store.usuarioActual?.email}
              </h5>
              <h5
                className="card-text"
                style={{ fontFamily: "fantasy", marginTop: "1rem" }}
              >
                <strong>Teléfono: </strong> {store.usuarioActual?.telefono}
              </h5>
              <h5
                className="card-text"
                style={{ fontFamily: "fantasy", marginTop: "1rem" }}
              >
                <strong>Dirección:</strong> {store.usuarioActual?.direccion}
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          {alert(
            "Debe iniciar sección para continuar en este sitio web, sino posee cuenta"
          )}
          <a href="/registrar"> click aquí</a>
        </div>
      )}
    </div>
  );
};
