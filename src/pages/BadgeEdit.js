import React from "react";

//vamos trayendo los componentes que vamos necesitando en la página
//Como hacemos el hero solo en esta página, y no es un componente, entonces hacemos todo acá
import "./styles/HeroEdit.css";
import BadgeForm from "../components/BadgeForm";
import logoHero from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import api from "../api";

class BadgeEdit extends React.Component {
  /* true porque su inicaliza con una petición */
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTittle: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    //read toma el id del badge que se pulsó. match.params sirve para que acceder a cada una de las variables que tenemos en el pad que declaramos en la ruta del Link ese props viene de react routers
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      //Guardamos la data en form porque es donde estamos guardando los datos de este formulario
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    //cuando enviamos los datos sale el loading y no hay errores
    this.setState({ loading: true, error: null });

    try {
      //Acá el botón actualiza El cual recibe un badgeId y la información que queremos actualizar
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      //history.push para redirigir al usuario a /badges
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      /* Es como un div pero que no se vé, para no tener divs innecesarios */
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="BadgeEdit_hero">
          <img src={logoHero} alt="logo" className="Logo_hero" />
        </div>

        <div className="container">
          {/* row y col-6 son de bootstrap para hacer display flex */}
          <div className="row">
            <div className="col-6">
              <Badge
                //Acá, cuando escribimos en el formulario, la información como ya se está renderizando en tiempo real, se va a pasar al badge en tiempo real
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "Twitter"}
                jobTittle={this.state.form.jobTittle || "Job Tittle"}
                email={this.state.form.email || "Email"}
                avatarUrl="https://i.imgur.com/UxrOwt8.jpg"
              />
            </div>
            {/* Le añadimos el prop de error que al capturar el error en caso de que halla al enviar el formulario, lo imprima aquí */}
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
