// @flow
import React, { Component } from "react";
import { type Airport } from "./AirportTypes";
import "./AirportDetail.css";

type Props = {|
  airport: Airport
|};

class AirportDetail extends Component<Props> {
  render() {
    return <div> {this.props.airport.id} </div>;
  }
}

export default AirportDetail;
