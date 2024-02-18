import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [saudacao, setSaudacao] = useState("");

  useEffect(() => {
    const getSaudacao = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setSaudacao("Bom dia, Visitante!");
      } else if (currentHour >= 12 && currentHour < 18) {
        setSaudacao("Boa tarde, Visitante!");
      } else {
        setSaudacao("Boa noite, Visitante!");
      }
    };

    getSaudacao();
  }, []); // Executa apenas uma vez no início

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="logo" />
            Techverse
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link activ" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dispositivos">
                Dispositivos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ciencia">
                Ciência
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tecnologia">
                Tecnologia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <span className="btn btn-primary">{saudacao}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
