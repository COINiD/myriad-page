import React, { Component } from "react";
import logo from "./assets/images/coinid-logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Myriad Wallet for COINiD</h1>
        </header>
        <p className="App-intro">
          If the goals are met we will add support for Myriad in COINiD.
        </p>
      </div>
    );
  }
}

export default App;
