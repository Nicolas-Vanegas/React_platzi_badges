import React, { Component } from "react";

//vamos trayendo los componentes que vamos necesitando en la página
//Como hacemos el hero solo en esta página, y no es un componente, entonces hacemos todo acá
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import "../components/styles/Hero.css";
import logoHero from "../images/platziconf-logo.svg";
import Navbar from "../components/Navbar";

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew_hero">
          <img src={logoHero} alt="logo" className="Logo_hero" />
        </div>

        <div className="container">
          {/* row y col-6 son de bootstrap para hacer display flex */}
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Nicolas"
                lastName="Vanegas"
                twitter="@DonChimbo52"
                jobTittle="Frontend Developer"
                avatarUrl="https://i.imgur.com/UxrOwt8.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
