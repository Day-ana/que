import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Events from "./Events";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Events />
      </div>
    );
  }
}

export default App;
