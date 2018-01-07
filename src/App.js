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

const RandomAirport = () => {
  const airport = airportList[Math.floor(Math.random() * airportList.length)];
  return <Redirect replace={true} to={`/airports/${airport.id}.html`} />;
};

const App = () => (
  <Router>
    <section>
      <Header />
      <Switch>
        <Route path="/airports/random" component={() => <RandomAirport />} />
        <Route
          path="/airports/:id([a-z]+.html)"
          component={AirportDetailWrapper}
        />
        <Route
          path="/*"
          component={() => <AirportList airports={airportList} />}
        />
      </Switch>
    </section>
  </Router>
);

export default App;
