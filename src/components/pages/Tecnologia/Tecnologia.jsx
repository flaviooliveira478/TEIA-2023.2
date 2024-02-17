import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/pic1.jpg";
import img2 from "../../../assets/images/2.jpg";

import noticiasData from "./noticias.json";
import "./tecnologia.css";

const Tecnologia = () => {
  return (
    <div>
      <div className="gradient-text-tech">
        <h2>Tecnologia</h2>
        <p>
          "Explore o fascinante universo da Tecnologia no Techverse! Nossa aba
          exclusiva de Tecnologia oferece uma jornada emocionante por
          descobertas revolucionárias, análises perspicazes e as mais recentes
          inovações que impulsionam o progresso tecnológico. Prepare-se para se
          maravilhar com as infinitas possibilidades que o futuro digital nos
          reserva."
        </p>
        <h4 className="btn btn-primary device-primary-titulo">Notícias</h4>
      </div>

      <div className="container device-container">
        <div className="row">
          {noticiasData.map((noticia) => (
            <div
              key={noticia.id}
              className="col-3 col-sm-6 device-square text-overlay"
            >
              <Link to={`../noticias/${noticia.id}`}>
                <img
                  src={noticia.id % 2 == 0 ? img1 : img2}
                  alt={`dispositivo ${noticia.id}`}
                />
                <div className="overlay-text">
                  <h4 className="new-h4">Tecnologia</h4>
                  <h4>{noticia.titulo}</h4>
                  <p>{noticia.descricao}</p>
                  <p className="lermore">Ler Mais</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologia;
