import React, { Component } from "react"; //import React Component

const EXAMPLE_SENATORS = [
  {
    id: "C000127",
    name: "Maria Cantwell",
    state: "WA",
    party: "Democrat",
    phone: "202-224-3441",
    twitter: "SenatorCantwell",
  },
  {
    id: "M001111",
    name: "Patty Murray",
    state: "WA",
    party: "Democrat",
    phone: "202-224-2621",
    twitter: "PattyMurray",
  },
];

/* Your code goes here */
export class App extends Component {
  render() {
    const { senators } = this.props;
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={senators} />
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    const { senators } = this.props;
    const cols = ["Name", "State", "Phone", "Twitter"];
    return (
      <table className="table table-bordered">
        <TableHeader cols={cols} />
        <tbody>
          {senators.map((senator) => (
            <SenatorRow key={senator.id} senator={senator} />
          ))}
        </tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {
  render() {
    const { cols } = this.props;
    return (
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    const { senator } = this.props;
    const { name, state, party, phone, twitter } = senator;
    return (
      <tr>
        <td>{name}</td>
        <td>{`${party.charAt(0)} - ${state}`}</td>
        <td>
          <a href={`tel:${phone}`}>{phone}</a>
        </td>
        <td>
          <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
        </td>
      </tr>
    );
  }
}
