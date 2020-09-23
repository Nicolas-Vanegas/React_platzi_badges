import React from "react";
/* el Link sirve para reemplazar el elemento de html <a> y que al dar click en el elemento te redirija a la nueva página sin recargar la ventana */
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/pageLoading";
import PageError from "../components/PageError";

import api from "../api";

class Badges extends React.Component {
  //En la otra rama del repo hay mpas información sobre constructor, componentWill, componentUpdate etc y hacemos una petición a la API con fetch de Rick and Morty.
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  //En el componentdidmount es el mejor lugar para comenzar la petición a una API
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    //declaramos el estado otra vez a loading true y error null, ya que al hacer la primera petición, estos datos habían cambiado, si hacemos otra, necesitamos reiniciarlos
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    console.log("2/4. Render()");
    if (this.state.loading === true) {
      //Componente para enseñar animación de loader
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
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
              {/* por cada dato en la lista data, creamos una lista */}
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
