import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CardPerfil } from "../component/cardperfil";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Perfil = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container">
        <div className="col-8" style={{ margin: "auto" }}>
          <CardPerfil />
        </div>
      </div>
    </nav>
  );
};
