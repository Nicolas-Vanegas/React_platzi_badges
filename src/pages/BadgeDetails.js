//Si el componente se encarga de presentar la interfaz basta con el nombre del componente
import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetailsContainer.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

//Usamos función cuando no usamos lógica. Cuando son funciones es porque ese componente no tiene un estado propio que manejar, no tiene ciclos de vida.
//Cuando necesitamos que las funciones actuen como clases usamos los HOOKS
//Crear un custom hook nos srive para encapsular lógica específica dentro de una función
//Crearé un hook el cual SIEMPRE debe comenzar por la palabra use
function useIncreaseCount(max) {
  //Esto es para usar Hooks, el useState (con un parámetro para inicializar el state) es un hook Para manejar el estado. Que regresa un arreglo. lo que está dentro del arreglo en este caso viene siendo como state y setState pero en una función.
  const [count, setCount] = React.useState(0);

  //Si en count es mayor al parametro de useIncreaseCount(5 en este caso) vuelve el count a 0
  if (count > max) {
    setCount(0);
  }

  //Siempre regresamos estos valores para que lo reciba la función BadgeDetails
  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(5);
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
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4 "
                >
                  Increase Count: {count}
                </button>
                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
