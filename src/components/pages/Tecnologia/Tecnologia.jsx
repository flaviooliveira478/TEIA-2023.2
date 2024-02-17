import React from "react";
import "./tecnologia.css";
import { Link } from "react-router-dom";
import post1 from "../../../assets/images/image-deviceheat-leonard-ai.jpg";
import post4 from "../../../assets/images/image-vr-leonard-ai.jpg";

const Tecnologia = () => {
  return (
    <div>
      <div className="gradient-text-tech">
        <h2>Tecnologia</h2>
        <p>
          "Explore o fascinante universo da Tecnologia no Techverse! Nossa aba
          exclusiva de Tecnologia oferece uma jornada emocionante por descobertas
          revolucionárias, análises perspicazes e as mais recentes inovações que
          impulsionam o progresso tecnológico. Prepare-se para se maravilhar com
          as infinitas possibilidades que o futuro digital nos reserva."
        </p>
      </div>

      <h4 className="btn btn-primary">Notícias</h4>
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

export default Tecnologia;
