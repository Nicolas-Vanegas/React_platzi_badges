//Esto lo usamos para que el avatar sea la foto de correo de cada persona. El md5 funciona para que cuando le un textoun hash (numeros y letras)En este caso le pasamos un correo y nos devuelve un hash para poder usar gravatar, el cual nos pide ese hash para poder poner una imagen pero tienes que estar registrado en gravatar

import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email);

  //con props.className se trae el valor de la página a la que pertenece la imagen, que es Badge.js
  return <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar" />;
}

export default Gravatar;
