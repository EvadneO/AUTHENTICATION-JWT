import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Registro = () => {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label
          for="inputEmail4"
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Nombre
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label
          for="inputEmail4"
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Apellido
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label
          for="inputEmail4"
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label
          for="inputPassword4"
          className="form-label"
          style={{ fontFamily: "cursive", fontSize: "25px" }}
        >
          Contraseña
        </label>
        <input type="password" className="form-control" id="inputPassword4" />
      </div>
      <div className="col-12">
        <label
          for="inputAddress"
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
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};
