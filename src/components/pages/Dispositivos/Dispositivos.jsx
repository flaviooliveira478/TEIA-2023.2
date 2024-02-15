import React from "react";
import "./dispositivos.css";
import devices from "../../../assets/images/devices-leonard-ai.jpg";
const Dispositivos = () => {
  return (
    <div className="gradient-text">
      <h2>Dispositivos</h2>
      <p>
        "Explore o universo tecnológico como nunca antes! Descubra as últimas
        novidades, análises e insights sobre dispositivos inovadores no
        Techverse, sua fonte definitiva para tudo relacionado à tecnologia."
      </p>

      <h4 className="btn btn-primary">Notícias</h4>
      <div className="container device-container">
        <div className="row">
          <div className="col-3 col-sm-6 device-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 col-sm-6 device-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 co-sm-6 device-square">
            <img src="" alt="ainda não tem" />
            <h4></h4>
            <h4></h4>
            <p></p>
            <p></p>
          </div>
          <div className="col-3 co-sm-6 device-square">
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

export default Dispositivos;
