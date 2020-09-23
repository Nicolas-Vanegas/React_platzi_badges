import React from "react";

import "./styles/NotFound.css";
import notFoundImg from "../images/Taken-bro.svg";

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound">
        <div className="NotFound__content">
          <h1>404</h1>
          <p>Page Not Found</p>
          <a href="/" className="btn btn-primary">
            Return home
          </a>
        </div>
        <img src={notFoundImg} alt="" />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
