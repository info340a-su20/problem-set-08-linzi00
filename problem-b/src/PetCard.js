import React, { Component } from "react";

export default class PetCard extends Component {
  render() {
    const { pet, adoptCallback } = this.props;
    const { name, sex, breed, img, adopted } = pet;
    return (
      <div
        className="card"
        onClick={() => {
          adoptCallback(name);
        }}
      >
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h3 className="card-title">
            {!!adopted ? name + " (Adopted)" : name}
          </h3>
          <p className="card-text">
            {sex} {breed}
          </p>
        </div>
      </div>
    );
  }
}
