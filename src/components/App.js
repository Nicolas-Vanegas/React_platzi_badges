import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Main";

function App() {
  return (
    <BrowserRouter>
      {/* El layout tiene sus elementos propios y adentro tiene más mondá */}
      <Layout>
        {/* Switch nos sirve para que al momento de dar click en lo lo que necesitamos, renderice solo una ruta, la primera que coincida con esa dirección */}
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/New" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
