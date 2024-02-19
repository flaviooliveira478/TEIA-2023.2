import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Layout = ({ infos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 img-left col-12">
          <Link to={`noticias/${infos[0].id}`}>
            <div className="img-overlay"></div>
            <img
              src={infos[0].imagem}
              alt="Imagem esquerda"
              className="image-layout-left"
            />
            <div className="text-overlay">
              <p className="btn btn-primary">{infos[0].tag}</p>
              <h6>{infos[0].titulo}</h6>
            </div>
          </Link>
        </div>
        <div className="col-md-6 col-12">
          <div className="col-12 img-right">
            <Link to={`noticias/${infos[1].id}`}>
              <div className="img-overlay"></div>
              <img
                src={infos[1].imagem}
                alt="Imagem direita 1"
                className="image-layout-right"
              />
              <div className="text-overlay">
                <p className="btn btn-primary">{infos[1].tag}</p>
                <h6>{infos[1].titulo}</h6>
              </div>
            </Link>
          </div>
          <div className="col-12 img-right">
            <Link to={`noticias/${infos[2].id}`}>
              <div className="img-overlay"></div>
              <img
                src={infos[2].imagem}
                alt="Imagem direita 2"
                className="image-layout-right"
              />
              <div className="text-overlay">
                <p className="btn btn-primary">{infos[2].tag}</p>
                <h6>{infos[2].titulo}</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
