// @flow
import React, { Component, type Node } from "react";
import { Link } from "react-router-dom";
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
        {this.props.href ? (
          <Link to={this.props.href}>{this.props.label}</Link>
        ) : (
          <a href="javascript:;">{this.props.label}</a>
        )}
      </li>
    );
  }
}

export default AirportCard;
