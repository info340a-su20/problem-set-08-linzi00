import React, { Component } from "react"; //import React Component
import AboutNav from "./AboutNav";
import BreedNav from "./BreedNav";
import PetList from "./PetList";
import _ from "lodash";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    const { pets } = props;
    this.state = { pets };
  }

  adopt = (name) => {
    this.setState((prevState) => {
      const { pets } = prevState;
      const petsToAdopt = _.find(pets, (pet) => pet.name === name);
      petsToAdopt.adopted = true;
      return { pets };
    });
  };

  render() {
    const { pets } = this.state;
    // const breeds = pets.map((pet) => pet.breed);
    const breedGroups = _.groupBy(pets, (pet) => pet.breed);
    return (
      <>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={Object.keys(breedGroups)} />
              <AboutNav />
            </div>
            <div id="petList" className="col-9">
              <PetList
                pets={pets}
                adoptCallback={(name) => {
                  this.adopt(name);
                }}
              />
            </div>
          </div>
        </main>

        <footer className="container">
          <small>
            Images from{" "}
            <a href="http://www.seattlehumane.org/adoption/dogs">
              Seattle Humane Society
            </a>
          </small>
        </footer>
      </>
    );
  }
}

export default App;
