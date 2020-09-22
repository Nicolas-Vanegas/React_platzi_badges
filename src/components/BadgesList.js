import React from "react";
import "./styles/BadgeList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            /* Cada hijo en una lista tiene que tener un hijo único llamado key, esto ayuda a React para poder determinar cuando el elemento se vuelve a renderizar si se mantuvo en la lista o si cambió (Le asignamos id de key porque tiene que ser único)*/
            <li className="BadgeList_item" key={badge.id}>
              <div className="list__imagen">
                <img src={badge.avatarUrl} alt="avatar" />
              </div>
              <div className="list_info">
                <p className="name">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="twitter">@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
