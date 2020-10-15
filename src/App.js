import React from "react";
import ColorsComp from "./ColorsComp";
import Gallery from "./Gallery";
import Header from "./Header";
import "./App.css";
import { Route } from "react-router";

function App() {

  return (
    <div className="App" >
      <Header />
      <div className="page-title">Painted Grits</div>
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
