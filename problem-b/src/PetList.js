import React, { Component } from "react";
import PetCard from "./PetCard";

export default class PetList extends Component {
  render() {
    const { pets, adoptCallback } = this.props;
    return (
      <>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {pets.map((pet) => (
            <PetCard key={pet.name} pet={pet} adoptCallback={adoptCallback} />
          ))}
        </div>
      </>
    );
  }
}
