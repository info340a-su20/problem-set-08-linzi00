import React, { Component } from "react";

export default class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li>
            <a href="#/">How to Adopt</a>
          </li>
          <li>
            <a href="#/">Volunteering</a>
          </li>
          <li>
            <a href="#/">Events</a>
          </li>
          <li>
            <a href="#/">Donate</a>
          </li>
          <li>
            <a href="#/">About Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}
