import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import Test from "./components/common/test";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        {/* <Test /> */}
      </main>
    );
  }
}

export default App;
