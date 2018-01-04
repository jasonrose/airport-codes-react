// @flow
import React, { Component } from "react";
import AirportList from "./AirportList";
import Header from "./Header";
import "./App.css";

class App extends Component<{}> {
  render() {
    return (
      <section>
        <Header />
        <AirportList />
      </section>
    );
  }
}

export default App;
