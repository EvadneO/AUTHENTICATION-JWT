import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Perfil } from "../pages/perfil";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputNombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="inputApellido"
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Teléfono
        </label>
        <input
          type="number"
          className="form-control"
          id="inputNumber"
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div className="col-12">
        <label
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Calle, número y comuna"
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label">Check me out</label>
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            let respuestas = [
              nombre,
              apellido,
              email,
              password,
              telefono,
              direccion,
            ];
            if (respuestas.includes("")) {
              alert("Complete todos los campos");
            } else {
              if (
                actions.getRegistro(
                  nombre,
                  apellido,
                  email,
                  password,
                  telefono,
                  direccion
                )
              ) {
                alert("Usuario registrado");
                window.location.href = "/loginUsu";
              }
            }
          }}
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};
