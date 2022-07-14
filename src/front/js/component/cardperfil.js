import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import evi from "../../img/evi.jpeg";

export const CardPerfil = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2">
          <img
            src={evi}
            className=""
            style={{ width: "8rem", borderRadius: "2rem" }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div
              className="title"
              style={{ textAlign: "left", marginTop: "1rem" }}
            >
              <h3>
                <strong>Evadne Alejandra Olivo</strong>
              </h3>
            </div>
            <h5
              className="card-text"
              style={{ fontFamily: "fantasy", marginTop: "1rem" }}
            >
              <strong>Correo:</strong>
            </h5>
            <h5
              className="card-text"
              style={{ fontFamily: "fantasy", marginTop: "1rem" }}
            >
              <strong>Teléfono:</strong>
            </h5>
            <h5
              className="card-text"
              style={{ fontFamily: "fantasy", marginTop: "1rem" }}
            >
              <strong>Dirección:</strong>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
