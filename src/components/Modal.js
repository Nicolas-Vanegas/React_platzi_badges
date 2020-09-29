import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  /* Esto es para crear un portal, recibe dos argumentos, qué queremos renderizar, y en dónde En este caso mostramos ese h1 en el div con nombre modal. Si el modal está abierto retorna true y sale el 2do return, si el modal está cerrado o se oprime la equis isOpen retorna false y no sale*/
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>

        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
