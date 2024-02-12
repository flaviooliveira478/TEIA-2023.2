import React, { useState, useEffect } from "react";
import "../index.css";
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
        <a className="navbar-brand" href="#">
          Techverse
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dispositivos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ciência
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tecnologia
              </a>
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
