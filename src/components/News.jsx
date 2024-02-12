import React from "react";
import "../index.css";

const News = ({ noticias }) => {
  return (
    <div className="news">
      <h2>Notícias mais recentes</h2>
      <div className="container news-container">
        <div className="row">
          <div className="col-4 col-sm-6 news-square">
            <img src={noticias[0].imagem} alt="ainda não tem" />
            <h4>{noticias[0].tag}</h4>
            <h4>{noticias[0].title}</h4>
            <p>{noticias[0].text}</p>
            <p>{noticias[0].lermais}</p>
          </div>
          <div className="col-4 col-sm-6 news-square">
            <img src={noticias[1].imagem} alt="ainda não tem" />
            <h4>{noticias[1].tag}</h4>
            <h4>{noticias[1].title}</h4>
            <p>{noticias[1].text}</p>
            <p>{noticias[1].lermais}</p>
          </div>
          <div className="col-4 co-sm-6 news-square">
            <img src={noticias[2].imagem} alt="ainda não tem" />
            <h4>{noticias[2].tag}</h4>
            <h4>{noticias[2].title}</h4>
            <p>{noticias[2].text}</p>
            <p>{noticias[2].lermais}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
