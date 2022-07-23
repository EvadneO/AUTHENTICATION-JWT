import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Perfil } from "../pages/perfil";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="row g-3">
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
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            let respuestas = [email, password];
            if (respuestas.includes("")) {
              alert("Complete todos los campos");
            } else {
              if (actions.getRegistro(email, password)) {
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
