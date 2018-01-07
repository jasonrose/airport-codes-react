// @flow
import { type Airport } from "./AirportTypes";
import "./AirportDetail.css";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

type Props = {|
  airport: Airport
|};

class AirportDetail extends Component<Props> {
  render() {
    return (
      <section className="detail">
        <Helmet>
          <title>
            Airport Codes - {this.props.airport.id.toUpperCase()} -{" "}
            {this.props.airport.nameEnglish || this.props.airport.name}
          </title>
        </Helmet>
        <Link className="overlay" to="/" />
        <article className="detail-info">
          <nav>
            <Link to="/airports/random" className="random">
              Random Airport
            </Link>
            <Link to="/" className="close-detail">
              Close
            </Link>
          </nav>
          <h1>{this.props.airport.id}</h1>
          <h2>{this.props.airport.name}</h2>
          <h3>
            <span className="city">{this.props.airport.city}</span>
            <span className="state">{this.props.airport.stateShort}</span>
            <span className="country">{this.props.airport.country}</span>
          </h3>
          <ReactMarkdown source={this.props.airport.description} />
          <footer>Social</footer>
        </article>
        <Link className="back" to="/">
          Airport Codes
        </Link>
        <footer>
          Photo by{" "}
          <a href={this.props.airport.imageCreditLink}>
            {this.props.airport.imageCredit}
          </a>
        </footer>
      </section>
    );
  }
}

export default AirportDetail;
