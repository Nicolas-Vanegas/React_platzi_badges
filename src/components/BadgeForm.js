import React from "react";

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
  handleChange = e => {
    /* Value: El valor de lo que se escribe en el input*/
    console.log({
      /* name: Nombre del input*/
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was Submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit} className="BadgeForm">
          <div className="form-group">
            <label>First Name</label>
            {/*onChange. Cada vez que escribimos en el imput, obtenemos un evento onChange. handleChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input onChange={this.handleChange} className="form-control" type="text" name="first-name" />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
