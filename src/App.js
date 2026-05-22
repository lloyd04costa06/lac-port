import React from "react";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="app">
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="coming-soon">
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>O</span>
          <span>O</span>
          <span>N</span>
        </h1>
      </div>
    </div>
  );
}

export default App;