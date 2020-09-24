import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeList.css";

import Gravatar from "../components/gravatar";
class BadgesList extends React.Component {
  render() {
    //Acá haremos el caso de que aún no hallan creado ningún badge, así que la petición solo va a regresar un arreglo vacio
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }
    //Creo esta constante para darle la vuelta a la lista d badges y que se muestren de hacia arriba para abajo a medida que se crean
    const badgesList = [...this.props.badges].reverse();
    return (
      <ul className="list-unstyled">
        {badgesList.map(badge => {
          return (
            /* Cada hijo en una lista tiene que tener un hijo único llamado key, esto ayuda a React para poder determinar cuando el elemento se vuelve a renderizar si se mantuvo en la lista o si cambió (Le asignamos id de key porque tiene que ser único)*/
            <li className="BadgeList_item" key={badge.id}>
              <div className="list__imagen">
                <Gravatar className="Badge_avatar" email={badge.email} alt="Avatar" />
              </div>
              <div className="list_info">
                <p className="name">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="twitter">@{badge.twitter}</p>
                <p className="monda">{badge.jobTitle}</p>
                <p className="email">{badge.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
