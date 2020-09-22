import React from "react";

import Navbar from "../components/Navbar";

/* En los componentes funcionales los props son el único argumento */
function Layout(props) {
  /* Esto lo hacemos para que los elementos adentro del Layout en el archivo App se muestren*/
  const children = props.children;
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
