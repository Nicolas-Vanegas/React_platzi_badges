import React, { Component } from "react";

//vamos trayendo los componentes que vamos necesitando en la página
//Como hacemos el hero solo en esta página, y no es un componente, entonces hacemos todo acá
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import "../components/styles/Hero.css";
import logoHero from "../images/platziconf-logo.svg";

class BadgeNew extends Component {
  /* Técnica para que el estado cambie en badgeNew y no en badgeform */
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTittle: "",
      twitter: "",
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="BadgeNew_hero">
          <img src={logoHero} alt="logo" className="Logo_hero" />
        </div>

        <div className="container">
          {/* row y col-6 son de bootstrap para hacer display flex */}
          <div className="row">
            <div className="col-6">
              <Badge
                //Acá, cuando escribimos en el formulario, la información como ya se está renderizando en tiempo real, se va a pasar al badge en tiempo real
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTittle={this.state.form.jobTittle}
                avatarUrl="https://i.imgur.com/UxrOwt8.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
