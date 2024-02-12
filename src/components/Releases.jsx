import React from "react";
import "../index.css";

const Releases = ({ dados }) => {
  return (
    <div className="releases">
      <h2>Lançamentos</h2>
      <div className="container ">
        <div className="row">
          <div className="col-6 releases-square">
            <h4>{dados[0].tag}</h4>
            <h4>{dados[0].titulo}</h4>
            <p>{dados[0].text}</p>
            <p>{dados[0].lermais}</p>
          </div>
          <div className="col-6 releases-square">
            <h4>{dados[1].tag}</h4>
            <h4>{dados[1].titulo}</h4>
            <p>{dados[1].text}</p>
            <p>{dados[1].lermais}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
