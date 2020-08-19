import React from "react";
import ReactDOM from "react-dom";
import senators from "./senators.json";
import { App } from "./App";

//render the App component here!
ReactDOM.render(<App senators={senators} />, document.getElementById("root"));
