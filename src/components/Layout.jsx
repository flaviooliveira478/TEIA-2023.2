import React from "react";
import "../index.css";

const Layout = ({ infos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 img-left">
          <img src={infos[0].imagem} alt="Imagem esquerda" />
          <p>{infos[0].tag}</p>
          <p>{infos[0].titulo}</p>
        </div>
        <div className="col-6">
          <div className="col-12 img-right">
            <img src={infos[1].imagem} alt="Imagem direita 1" />
            <p>{infos[1].tag}</p>
            <p>{infos[1].titulo}</p>
          </div>
          <div className="col-12 img-right">
            <img src={infos[2].imagem} alt="Imagem direita 2" />
            <p>{infos[2].tag}</p>
            <p>{infos[2].titulo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
