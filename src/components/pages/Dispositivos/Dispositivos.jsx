import React from "react";
import { Link } from "react-router-dom";
import "./dispositivos.css";
import post1 from "../../../assets/images/image-deviceheat-leonard-ai.jpg";
import post4 from "../../../assets/images/image-vr-leonard-ai.jpg";
import post6 from "../../../assets/images/image-glicose-device.jpg";

const Dispositivos = () => {
  return (
    <div>
      <div className="gradient-text">
        <h2 className="titulo-device">Dispositivos</h2>
        <p className="description-device">
          "Explore o universo tecnológico como nunca antes! Descubra as últimas
          novidades, análises e insights sobre dispositivos inovadores no
          Techverse, sua fonte definitiva para tudo relacionado à tecnologia."
        </p>

        <h4 className="btn btn-primary device-primary-titulo">Notícias</h4>
      </div>
      <div className="container device-container">
        <div className="row">
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/1">
              <img src={post1} alt="dispositivo temperatura" />
              <div className="overlay-text">
                <h4 className="new-h4">Dispositivos</h4>
                <h4>
                  Dispositivo inovador promete combater calor extremo no
                  trabalho
                </h4>
                <p>
                  Trabalhadores que enfrentam o calor infernal no dia a dia
                  podem ter um novo aliado: um dispositivo vestível capaz de
                  monitorar a temperatura corporal em tempo real e alertar sobre
                  o risco de superaquecimento.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Dispositivos</h4>
                <h4>
                  Metaverso: Mergulhando em um Novo Mundo de Possibilidades
                </h4>
                <p>
                  O metaverso está se tornando uma das tendências tecnológicas
                  mais quentes do momento. Essa nova fronteira digital promete
                  revolucionar a maneira como nos comunicamos, trabalhamos, nos
                  divertimos e experimentamos o mundo.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/6">
              <img src={post6} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Dispositivos</h4>
                <h4>
                  Dispositivo Vestível Revoluciona Monitoramento de Glicose:
                  Adeus Picadas?
                </h4>
                <p>
                  Um novo dispositivo vestível promete revolucionar o
                  monitoramento de glicose no sangue para pessoas com diabetes.
                  O dispositivo, ainda em desenvolvimento, utiliza sensores para
                  medir os níveis de glicose através da pele, sem a necessidade
                  de picadas dolorosas.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Dispositivos</h4>
                <h4>
                  Metaverso: Mergulhando em um Novo Mundo de Possibilidades
                </h4>
                <p>
                  O metaverso está se tornando uma das tendências tecnológicas
                  mais quentes do momento. Essa nova fronteira digital promete
                  revolucionar a maneira como nos comunicamos, trabalhamos, nos
                  divertimos e experimentamos o mundo.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Dispositivos</h4>
                <h4>
                  Metaverso: Mergulhando em um Novo Mundo de Possibilidades
                </h4>
                <p>
                  O metaverso está se tornando uma das tendências tecnológicas
                  mais quentes do momento. Essa nova fronteira digital promete
                  revolucionar a maneira como nos comunicamos, trabalhamos, nos
                  divertimos e experimentamos o mundo.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispositivos;
