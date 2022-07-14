import React from "react";
import { Link } from "react-router-dom";
import evas from "../../img/evas.png";
import evi from "../../img/evi.jpeg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src={evas}
            className="rounded-circle"
            style={{ width: "8rem" }}
          ></img>
        </Link>
        <div className="row">
          <div className="col-3">
            <div
              className="title"
              style={{ textAlign: "left", marginTop: "1rem" }}
            >
              <h6>Hola Evadne!</h6>
            </div>
          </div>
          <div className="col-3">
            <img
              src={evi}
              className=""
              style={{ width: "4rem", borderRadius: "2rem" }}
            />
          </div>
          <div className="col-2">
            <div className="dropdown">
              <button
                className="cardButton btn btn-ls btn-dark outline-info dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                <i className="fa fa-user"></i>
                <span> Cuenta</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
                style={{ border: "solid 1px black" }}
              >
                <li className="ms-1">
                  <Link to="/perfil">
                    <button className="btn btn-ligth" href="/perfil">
                      <i className="fas fa-id-badge"> Perfil</i>
                    </button>
                  </Link>
                </li>
                <li className="ms-1">
                  <div className="ml-auto">
                    {!sessionStorage.getItem("Token") ||
                    sessionStorage.getItem("Token") == "" ? (
                      <Link to="/loginUsu">
                        <button
                          className="btn btn-ligth"
                          type="button"
                          href="/loginUsu"
                        >
                          <i className="fas fa-user"> Iniciar sesión </i>
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="btn btn-dark"
                        href="/login"
                        onClick={() => {
                          sessionStorage.setItem("Token", "");
                          sessionStorage.setItem("email", "");
                          actions.resetUsuarioActual();
                          history.push("/");
                        }}
                      >
                        <i className="fas fa-user"> Cerrar sesión </i>
                      </button>
                    )}
                  </div>
                </li>
                <li className="">
                  <Link className="dropdown-item" to="/registrar">
                    {" "}
                    <i className="fas fa-users"> Regístrate</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
