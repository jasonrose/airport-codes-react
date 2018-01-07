// @flow
import AirportCard from "./AirportCard";
import { type Airport } from "./AirportTypes";
import ContributeCard from "./ContributeCard";
import React, { Component } from "react";

type Props = {|
  airports: Array<Airport>
|};

class AirportList extends Component<Props> {
  render() {
    return (
      <ul>
        {this.props.airports.map(airport => (
          <AirportCard
            key={airport.id}
            href={`/airports/${airport.id}.html`}
            label={airport.id}
          />
        ))}
        <ContributeCard />
      </ul>
    );
  }
}

export default AirportList;
