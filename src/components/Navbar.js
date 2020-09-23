import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logo from "../images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        {/* Container-fluid es un estilo que viene en el bootstrap */}
        <div className="container-fluid">
          <Link to="/" className="Nav_brand">
            <img src={logo} alt="logo" className="Nav_brand-logo" />
            <span
              /* font-weight-light es un estilo que viene en bootstrap*/
              className="font-weight-light"
            >
              Platzi
            </span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
