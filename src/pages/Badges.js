import React from "react";
/* el Link sirve para reemplazar el elemento de html <a> y que al dar click en el elemento te redirija a la nueva página sin recargar la ventana */
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  /* Estos métodos se llaman cuando se crea una instancia de un componente y se inserta en el DOM*/
  /* En el constructor se inicializan variables */
  constructor(props) {
    console.log("1. constructor()");
    super(props);
    this.state = {
      /* para que cuando al darle click al botón de cargar más, nos muestre la nextPage */
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      } /* [
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          firstName: "Freda",
          lastName: "Grady",
          email: "Leann_Berge@gmail.com",
          jobTitle: "Legacy Brand Director",
          twitter: "FredaGrady22221-7573",
          avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
        },
        {
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          firstName: "Major",
          lastName: "Rodriguez",
          email: "Ilene66@hotmail.com",
          jobTitle: "Human Research Architect",
          twitter: "ajorRodriguez61545",
          avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          firstName: "Daphney",
          lastName: "Torphy",
          email: "Ron61@hotmail.com",
          jobTitle: "National Markets Officer",
          twitter: "DaphneyTorphy96105",
          avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
        },
      ], */,
    };
  }

  /* Acá vamos a simular una petición a una API inicializando el state donde data está vacio*/
  componentDidMount() {
    console.log("3. componentDidMount()");

    //metemos el Timeoout en una costante porque vamos a llamar otra función con este timeout
    /* this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "ajorRodriguez61545",
            avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
          },
        ],
      });
    }, 3000); */

    this.fetchCaracters();
  }

  fetchCaracters = async () => {
    //iniciamos el fetch con la carga en true y sin errores
    this.setState({ loading: true, error: null });

    //intentamos la petición
    try {
      /* ?page=${} Esto es para que cargue las diferentes páginas de la api 1,2,3,4...*/
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const data = await response.json();

      //Queremos guardar data, y lo haremos en el state de este componente
      this.setState({
        //Cuando ya tenemos la petición realizada correctamente, el loading pasa a false, guardamos data y aumentamos el valor de nextPage para que nos quede cargada la siguiente pagina pe la API.
        loading: false,
        data: {
          /* Esto para que al cargar la siguiente página, no se nos borren todos los datos ya cargados, data trae info y results, la info la reemplazamos por la nueva info pero results los concatenamos para que aparescan los nuevos sin borrar los anteriores*/
          info: data.info,
          results: [].concat(
            /* el primero son los datos viejos y los nuevos los segundos*/
            this.state.data.results,
            data.results
          ),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    //Valores de Props y State antes de la actualización
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    //Valores después de la actualización
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  //Este es el momento preciso antes de que se vaya el componente del DOM
  componentWillUnmount() {
    console.log("6. componentWillUnmount()");

    //con esto si el timeout está pendiente lo cancela.
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2/4. Render()");
    /* Si la petición bota error así lo mostramos */
    if (this.state.error) {
      return `error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        {/* <Navbar /> lo pasamos para otro archivo para reducir código y que no esté en todas las páginas*/}

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            {/* Link para que la página no se recargue */}
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              {/* por cada dato en la lista data, creamos una lista con un p que nos devulve el nombre y el apellido */}
              <BadgesList badges={this.state.data.results} />
            </div>
            {/* Si la petición está cargando, enseña esto */}
            {this.state.loading && <h1>Cargando papi!!</h1>}
          </div>
          {/* Si la petición ya cargo entonces creamos el botón para cargar más personajes con el evento onClick para que realice la carga de más caracteres y como no queremos que le pase el evento así que lo llamamos ahí sin argumentos*/}
          <div>
            {!this.state.loading && (
              <div className="Badges__buttons">
                <button className="btn btn-primary" onClick={() => this.fetchCaracters()}>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
