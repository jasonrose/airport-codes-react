// @flow
import React, { Component, type Node } from "react";
import "./AirportCard.css";

type Props = {|
  className?: string,
  href?: string,
  label: string | Node
|};

class AirportCard extends Component<Props> {
  render() {
    return (
      <li className={this.props.className}>
        <a href={this.props.href}>{this.props.label}</a>
      </li>
    );
  }
}

export default AirportCard;
