import React from "react";
import { Link } from "react-router-dom";
import "./ciencia.css";
import post2 from "../../../assets/images/image-vaccine-leonardo-ai.jpg";
import post3 from "../../../assets/images/image-Alzheimer-leonardo-ai.jpg";
import post5 from "../../../assets/images/image-ia-na-saude-leonardo-ai.jpg";

const Ciencia = () => {
  return (
    <div className="gradient-text-science">
      <h2 className="titulo-device">Ciência</h2>
      <p className="description-device">
        "Explore as fronteiras do conhecimento científico no Techverse! Nossa
        aba dedicada à Ciência oferece uma jornada fascinante através das
        últimas descobertas, teorias inovadoras e avanços que moldam o nosso
        mundo."
      </p>

      <h4 className="btn btn-primary device-primary-titulo">Notícias</h4>
      <div className="container device-container">
        <div className="row">
          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/2">
              <img src={post2} alt="Imagem sobre Vacina - Covid 19" />
              <div className="overlay-text">
                <h4 className="new-h4">Ciência</h4>
                <h4>
                  Nobel de Fisiologia ou Medicina: Reconhecimento por Vacinas de
                  mRNA
                </h4>
                <p>
                  A bioquímica Katalin Karikó e o imunologista Drew Weissman
                  receberam o Nobel de Fisiologia ou Medicina 2023 por suas
                  pesquisas que lançaram as bases para as vacinas de RNA
                  mensageiro (mRNA) contra a Covid-19.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/3">
              <img src={post3} alt="Imagem sobre Alzheimer" />
              <div className="overlay-text">
                <h4 className="new-h4">Ciência</h4>
                <h4>
                  Novo medicamento contra Alzheimer: esperança no horizonte
                </h4>
                <p>
                  Esperança para pacientes com Alzheimer: Um novo medicamento
                  experimental, o donanemabe, mostrou-se capaz de retardar o
                  declínio cognitivo em até 60% em pacientes nos estágios
                  iniciais da doença.
                </p>
                <p className="lermore">Ler Mais</p>
              </div>
            </Link>
          </div>

          <div className="col-3 col-sm-6 device-square text-overlay">
            <Link to="../noticias/5">
              <img src={post5} alt="Imagem sobre IA na saúde" />
              <div className="overlay-text">
                <h4 className="new-h4">Ciência</h4>
                <h4>Ciência de dados e IA na saúde</h4>
                <p>
                  O setor da saúde enfrenta a constante necessidade de otimizar
                  operações e lidar com a escassez de profissionais
                  qualificados. A ciência de dados e a IA surgem como aliadas
                  para superar esses desafios, impulsionando a escalabilidade e
                  a eficiência.
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

export default Ciencia;
