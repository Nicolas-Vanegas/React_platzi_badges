import React, { Component } from "react";

import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* Container-fluid es un estilo que viene en el bootstrap */}
        <div className="container-fluid">
          <a href="/" className="Nav_brand">
            <img src={logo} alt="logo" className="Nav_brand-logo" />
            <span
              /* font-weight-light es un estilo que viene en bootstrap*/
              className="font-weight-light"
            >
              Platzi
            </span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
