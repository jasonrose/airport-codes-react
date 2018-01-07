// @flow
import React, { Component } from "react";
import { type Airport } from "./AirportTypes";
import AirportList from "./AirportList";
import Header from "./Header";
import "./App.css";

const airports: Array<Airport> = [{ code: "aal" }, { code: "aar" }];

class App extends Component<{}> {
  render() {
    return (
      <section>
        <Header />
        <AirportList airports={airports} />
      </section>
    );
  }
}

export default App;
