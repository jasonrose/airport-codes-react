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
            key={airport.code}
            href={`/airports/${airport.code}.html`}
            label={airport.code}
          />
        ))}
        <ContributeCard />
      </ul>
    );
  }
}

export default AirportList;
