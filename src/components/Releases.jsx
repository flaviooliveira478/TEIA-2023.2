import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Releases = ({ dados }) => {
  return (
    <div className="releases">
      <h2>Lançamentos</h2>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-12 releases-square">
            <Link
              to={`noticias/7`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4 className="btn btn-primary ">{dados[0].tag}</h4>
              <h4 className="releases-title">{dados[0].titulo}</h4>
              <p>{dados[0].text}</p>
              <p className="lermais">{dados[0].lermais}</p>
            </Link>
          </div>
          <div className="col-md-6 col-12 releases-square">
            <Link
              to={`noticias/8`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h4 className="btn btn-primary">{dados[1].tag}</h4>
              <h4 className="releases-title">{dados[1].titulo}</h4>
              <p>{dados[1].text}</p>
              <p className="lermais">{dados[1].lermais}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
