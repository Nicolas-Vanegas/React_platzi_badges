import React, { Component } from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

//Separaré los componentes de esta página con la técnica UI Components y Container Components. Algunos comentarios decían que era mala práctica porque en Hook no es necesario. El profesor dice que es buena práctica
class BadgeDetailsContainer extends Component {
  //traer los datos
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  //Cuando el component ya esté listo se hace el fetchData
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return <BadgeDetails badge={this.state.data} />;
  }
}

export default BadgeDetailsContainer;
