import React, { Component } from "react";
import pageErrorImg from "../images/Alien-science-pana.svg";

function PageError(props) {
  return (
    <div className="NotFound">
      <div className="NotFound__content">
        <h1>{props.error.message}</h1>
        <a href="/" className="btn btn-primary">
          Return home
        </a>
      </div>
      <img src={pageErrorImg} alt="" className="serverError" />
    </div>
  );
}

export default PageError;
