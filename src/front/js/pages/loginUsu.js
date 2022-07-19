import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Login } from "../component/login";
import "../../styles/home.css";
import { Perfil } from "./perfil";

import { Context } from "../store/appContext";

export const LoginUsu = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container" style={{ margin: "auto", marginTop: "3rem" }}>
      <div className="title" style={{ textAlign: "center" }}>
        <h1>Iniciar Sección</h1>
      </div>
      <div className="col-8" style={{ margin: "auto", marginTop: "3rem" }}>
        <Login />
      </div>
    </div>
  );
};
