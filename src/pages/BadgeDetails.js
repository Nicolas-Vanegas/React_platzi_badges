//Si el componente se encarga de presentar la interfaz basta con el nombre del componente
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./styles/BadgeDetailsContainer.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";

//Usamos función cuando no usamos lógica
function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetailsContainer__hero">
        <div className="container">
          {/* Clases de bootstrap */}
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="image hero" />
            </div>
            <div className="col-6 BadgeDetailsContainer__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobtitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
                {/* Esto es para crear un portal, recibe dos argumentos, qué queremos renderizar, y en dónde En este caso mostramos ese h1 en el div con nombre modal*/}
                {ReactDOM.createPortal(<h1>Hola, realmente no estoy Aquí</h1>, document.getElementById("modal"))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
