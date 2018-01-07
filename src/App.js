// @flow
import React, { Component } from "react";
import { type Airport } from "./AirportTypes";
import AirportList from "./AirportList";
import Header from "./Header";
import "./App.css";
import airports from "./concat";

const airportList: Array<Airport> = Object.keys(airports).map(
  key => airports[key]
);

class App extends Component<{}> {
  render() {
    return (
      <section>
        <Header />
        <AirportList airports={airportList} />
      </section>
    );
  }
}

export default App;
