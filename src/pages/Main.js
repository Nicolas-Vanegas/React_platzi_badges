import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Home__image">
            <img src={astronauts} alt="astronauts" />
          </div>
          <div className="Home__description">
            <img src={logo} alt="" />
            <h1>Print Your Badges</h1>
            <p>The easiest way to manage your conference</p>
            <Link to="/Badges" className="btn btn-primary">
              Start now
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
