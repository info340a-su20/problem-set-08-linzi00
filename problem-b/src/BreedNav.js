import React, { Component } from "react";

export default class BreedNav extends Component {
  render() {
    const { breeds } = this.props;
    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breeds.map((breed) => (
            <li key={breed}>
              <a href="#/">{breed}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
