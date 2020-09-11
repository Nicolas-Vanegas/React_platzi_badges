/* const element = document.createElement("h1");
element.innerText = "Hello, Platzi Badges!";

const container = document.getElementById("app");

container.appendChild(element); */

//Ahora la misma mondá, pero con React
//React va a ser el análogo del createElement y ReactDOM de appendChild
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge"; /* const element = React.createElement("h1", {}, `Hola, soy ${name}`); */ /* const jsx = <h1>Hola, soy {name}</h1>; */ /* const element = (
  <div>
    <h1>Hola, soy {name}</h1>
    <p>Soy ingeniero Civil</p>
  </div>
); */ /* const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, `Hola, soy ${name}`),
  React.createElement("p", {}, "Soy ingeniero Civil con createElement")
); */ //dentro de los corchetes puedes poner tanot variables como expresiones. (Una expresión es algo que en js se va a interpretar y se va a evalear). si la expresión que pongas retorna un valor falsty, no se va a ver //con jsx //Lo de arriba pero con create.Element

//react tiene jsx que te permite escribir html, siempre que vayas a escribir jsx, tienes que importar react
/* const jsx = <h1>Hello, PLatzi Badges from React!</h1>; */
//alternativa a jsx
/* const element = React.createElement("a", { href: "https://youtube.com" }, "Ir a platzi"); */
/* const name = "Pedro"; */ const container = document.getElementById("app");

/* ReactDOM.render(_qué_,_dónde_) */
//Si no tienen los </> es un componente, pero a reactDOM.render hay que darle un elemento, por eso le ponemos </> al Badge el cual es originalmente un componente
ReactDOM.render(<Badge />, container);
