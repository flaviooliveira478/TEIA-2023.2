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

      <div className="container device-container">
      <div className="row">
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/7">
              <img src={post1} alt="dispositivo temperatura" />
              <div className="overlay-text">
                <h4 className="new-h4">Tecnologia</h4>
                <h4>
                  Avanços Revolucionários na Inteligência Artificial Prometem Transformar Radicalmente a Tecnologia
                </h4>
                <p>
                  Uma nova era de inovação está se desenhando no horizonte da tecnologia, 
                  impulsionada por avanços revolucionários na inteligência 
                  artificial (IA). 
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Tecnologia</h4>
                <h4>
                Robôs Colaborativos Redefinem a Manufatura com Eficiência e Precisão                </h4>
                <p>
                Na vanguarda da revolução industrial, os robôs colaborativos estão redefinindo os padrões de eficiência e precisão na manufatura.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Tecnologia</h4>
                <h4>
                Blockchain na Saúde: Garantindo a Segurança e Integridade dos Dados Médicos                </h4>
                <p>
                A tecnologia blockchain está encontrando novas aplicações no setor de saúde, proporcionando uma solução inovadora para a segurança e integridade dos dados médicos.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Tecnologia</h4>
                <h4>
                Realidade Aumentada Chega aos Espaços de Trabalho, Transformando a Experiência Profissional                </h4>
                <p>
                A realidade aumentada (RA) está deixando de ser uma tecnologia exclusiva do entretenimento e invadindo os espaços de trabalho, transformando a experiência profissional.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/4">
              <img src={post4} alt="dispositivo oculos vr" />
              <div className="overlay-text">
                <h4 className="new-h4">Tecnologia</h4>
                <h4>
                Computação Quântica: Avanços Promissores Rumo à Supremacia Quântica                </h4>
                <p>
                Os avanços na computação quântica estão acelerando, sinalizando passos significativos em direção à tão esperada supremacia quântica.
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
