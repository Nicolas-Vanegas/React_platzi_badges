import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

//Los componentes son clases. con extends para crear una clase que es hija de otra, en este caso creamos Bagde apartir de React.Component
class Badge extends React.Component {
  //método obligatorio el cual define cual va hacer el resultado que veamos en pantalla
  render() {
    return (
      //class no es bueno usarlo en React porque la palabra class ya es una palabra reservada por js, así que hay que reemplazarla por className
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge_section-name">
          <img className="Badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Nicolas <br /> Vanegas
          </h1>
        </div>

        <div className="Badge_section-info">
          <h3 className="profesión">FrontEnd Enginner</h3>
          <p className="twitter">@donChimbo52</p>
        </div>

        <div className="Badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
