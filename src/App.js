import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Events from "./Events";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <Router>
        <Events path="/" />
        <Details path="details/:id" />
      </Router>
    );
  }
}

export default App;
