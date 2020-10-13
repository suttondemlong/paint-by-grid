import React from "react";
import ColorsComp from "./ColorsComp";
import Gallery from "./Gallery";
import Header from "./Header";
import "./App.css";
import { Route } from "react-router";

function App() {

  return (
    <div className="App">
      <Header />
      <h1>Painted Grits</h1>
      <Route exact path="/">
        <ColorsComp />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
    </div>
  ) 
}

export default App;
