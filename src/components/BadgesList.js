import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            /* Cada hijo en una lista tiene que tener un hijo único llamado key, esto ayuda a React para poder determinar cuando el elemento se vuelve a renderizar si se mantuvo en la lista o si cambió (Le asignamos id de key porque tiene que ser único)*/
            <li key={badge.id}>
              <p>
                {badge.firstName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
