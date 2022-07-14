import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Login = () => {
  return (
    <form>
      <div className="container" style={{ width: "30rem" }}>
        <div className="mb-3">
          <h4>
            <label
              for="exampleInputEmail1"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              Email
            </label>
          </h4>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div className="mb-3">
          <h4>
            <label
              for="exampleInputPassword1"
              className="form-label"
              style={{ fontFamily: "cursive" }}
            >
              Contraseña
            </label>
          </h4>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
