// @flow
import React, { Component } from "react";

class Header extends Component<{}> {
  render() {
    return (
      <header>
        <nav>
          <h1>
            <a href="/">Airport Codes</a>
            <a className="nav-about" href="about.html">
              About
            </a>
          </h1>
          <input
            type="text"
            name="search"
            autocomplete="off"
            autocorrect="off"
            placeholder="Find your airport"
          />
          <button className="clear" type="reset" />
        </nav>
      </header>
    );
  }
}

export default Header;
