import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Perfil } from "../pages/perfil";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="container" style={{ width: "30rem" }}>
        <div className="mb-3">
          <h4>
            <label className="form-label" style={{ fontFamily: "cursive" }}>
              Email
            </label>
          </h4>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div className="mb-3">
          <h4>
            <label className="form-label" style={{ fontFamily: "cursive" }}>
              Contraseña
            </label>
          </h4>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            actions.getLogin(email, password);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
