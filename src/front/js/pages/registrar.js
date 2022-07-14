import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Registro } from "../component/registro";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Registrar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container" style={{ margin: "auto", marginTop: "3rem" }}>
      <div className="title" style={{ textAlign: "center" }}>
        <h1>Registro de Usuario</h1>
      </div>
      <div className="col-8" style={{ margin: "auto", marginTop: "3rem" }}>
        <Registro />
      </div>
    </div>
  );
};
