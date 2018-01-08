// @flow
import About from "./About";
import AirportDetail from "./AirportDetail";
import { type Airport } from "./AirportTypes";
import AirportList from "./AirportList";
import airports from "./concat";
import Header from "./Header";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

const airportList: Array<Airport> = Object.keys(airports).map(
  key => airports[key]
);

const AboutWrapper = () => {
  const countryCounts = {};
  const photographerCounts = {};
  airportList.forEach(airport => {
    countryCounts[airport.country] = true;
    photographerCounts[airport.imageCredit] = true;
  });
  return (
    <About
      airportCount={airportList.length}
      countryCount={Object.keys(countryCounts).length}
      photographerCount={Object.keys(photographerCounts).length}
    />
  );
};

const AirportDetailWrapper = ({ match }) => {
  const id = match.params.id.split(".")[0];
  const airport = airports[id];
  return airport ? (
    <AirportDetail airport={airports[id]} />
  ) : (
    <Redirect to="/" />
  );
};

const LegacySupportView = ({ location }) => {
  if (location.hash.indexOf("#airport/") !== -1) {
    return (
      <Redirect
        to={`/airports/${location.hash.split("/")[1]}.html`}
        replace={true}
      />
    );
  }
  if (location.hash.indexOf("#about") !== -1) {
    return <Redirect to={`/about.html`} replace={true} />;
  }
  if (location.hash !== "" || location.pathname !== "/") {
    return <Redirect to="/" replace={true} />;
  }
  return (
    <section>
      <Header />
      <AirportList airports={airportList} />
    </section>
  );
};

const RandomAirport = () => {
  const airport = airportList[Math.floor(Math.random() * airportList.length)];
  return <Redirect replace={true} to={`/airports/${airport.id}.html`} />;
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/about.html" component={AboutWrapper} />
      <Route path="/airports/random" component={RandomAirport} />
      <Route
        path="/airports/:id([a-z]+.html)"
        component={AirportDetailWrapper}
      />
      <Route path="/*" component={LegacySupportView} />
    </Switch>
  </Router>
);

export default App;
