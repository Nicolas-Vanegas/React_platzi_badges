import React from "react";

import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
  //Inicializamos el state
  //OnChange = e => {
  /* Value: El valor de lo que se escribe en el input*/
  /* console.log({
      // name: Nombre del input
      name: e.target.name,
      value: e.target.value,
    }); */

  //establecemos el estado de cada input con lo que está escribiendo el usuario("Acá aunque no se ve, la información se está guardando en dos sitios y no es lo más optimo."
  //Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar
  //this.setState({
  //  [e.target.name]: e.target.value,
  //});
  //};
  handleClick = e => {
    console.log("button was clicked");
  };
  /* handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }; */

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit} className="BadgeForm">
          <div className="form-group">
            <label>First Name</label>
            {/*OnChange. Cada vez que escribimos en el imput, obtenemos un evento OnChange. onChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              /* este value se la da para que los input estén controlados y no se creen dos copias de información cuando creo el setState. this.state para leer el estado y para escribirlo setState. Al verificar su el state existe y no encontrar nada nos bota error, así que debemos inicializarlo primero*/
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            {/*OnChange. Cada vez que escribimos en el imput, obtenemos un evento OnChange. props.OnChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            {/*OnChange. Cada vez que escribimos en el imput, obtenemos un evento OnChange. props.OnChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Tittle</label>
            {/*OnChange. Cada vez que escribimos en el imput, obtenemos un evento OnChange. OnChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTittle"
              value={this.props.formValues.jobTittle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            {/*OnChange. Cada vez que escribimos en el imput, obtenemos un evento OnChange. props.OnChange el método que vamos a crear el cual siempre llamaremos empezando con handle*/}
            <input
              required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {/* Si el error al enviar el formulario existe entonces se despliega lo siguiente text-danger es una clase que viene con bootstrap*/}
          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
