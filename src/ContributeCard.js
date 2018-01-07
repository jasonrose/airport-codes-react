// @flow
import AirportCard from "./AirportCard";
import React, { Component } from "react";
import "./ContributeCard.css";

type Props = {||};

class ContributeCard extends Component<Props> {
  render() {
    return (
      <AirportCard className="card-contribute" label="contribute an airport" />
    );
  }
}

export default ContributeCard;
