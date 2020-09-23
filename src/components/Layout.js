import React from "react";

import Navbar from "../components/Navbar";

/* En los componentes funcionales los props son el único argumento */
function Layout(props) {
  /* Esto lo hacemos para que los elementos adentro del Layout en el archivo App se muestren*/
  const children = props.children;
  /* Siempre que regresamos en el render tenemos que regresar un solo elemento con React.Fragment podemos hacer para regresar más de un elemento*/
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
