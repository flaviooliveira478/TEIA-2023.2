import React from "react";
import "./tecnologia.css";

const Tecnologia = () => {
  return (
    <div className="gradient-text-tech">
      <h2>Tecnologia</h2>
      <p>
        "Explore o fascinante universo da Tecnologia no Techverse! Nossa aba
        exclusiva de Tecnologia oferece uma jornada emocionante por descobertas
        revolucionárias, análises perspicazes e as mais recentes inovações que
        impulsionam o progresso tecnológico. Prepare-se para se maravilhar com
        as infinitas possibilidades que o futuro digital nos reserva."
      </p>

      <h4 className="btn btn-primary">Notícias</h4>
      <div className="container tech-container">
        <div className="row">
          <div className="col-3 col-sm-6 tech-square">
            <img src="../../../assets/images/image-headphone-translator-leonardo-ai.jpg" alt="Imagem Headphone Translator" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 col-sm-6 tech-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 co-sm-6 tech-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 co-sm-6 science-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologia;
