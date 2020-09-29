import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import pageLoading from "../components/pageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from "../api";

class BadgeDetails extends Component {
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
      return <pageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    //guardo this.state.data en esta variable para no tener que escribirla a cada rato
    const badge = this.state.data;

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            {/* Clases de bootstrap */}
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="image hero" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobtitle={badge.jobTitle}
              />
            </div>
            <div class="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link class="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                    Edit
                  </Link>
                </div>
                <div>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
