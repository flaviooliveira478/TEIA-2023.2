import React from "react";
import "../index.css";

const Title = (props) => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Title;
