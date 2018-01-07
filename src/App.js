// @flow
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AirportDetail from "./AirportDetail";
import { type Airport } from "./AirportTypes";
import AirportList from "./AirportList";
import Header from "./Header";
import "./App.css";
import airports from "./concat";

const airportList: Array<Airport> = Object.keys(airports).map(
  key => airports[key]
);

const AirportDetailWrapper = ({ match }) => {
  const id = match.params.id.split(".")[0];
  const airport = airports[id];
  return airport ? (
    <AirportDetail airport={airports[id]} />
  ) : (
    <Redirect to="/" />
  );
};

const App = () => (
  <Router>
    <section>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <AirportList airports={airportList} />}
        />
        <Route
          path="/airports/:id([a-z]+.html)"
          component={AirportDetailWrapper}
        />
      </Switch>
    </section>
  </Router>
);

export default App;
