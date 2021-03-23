import React from "react"
import MainView from "./MainView"
import NavBar from "./NavBar"
import Footer from "./Footer"
import About from "./About"
import Services from "./Services"
import {Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="appWrapper">
      <NavBar />

      <div className="body">
        <Switch>
          <Route exact path="/"><MainView /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/Services"> <Services /></Route>
        </Switch>
        </div>
      <Footer />

    </div>
  );
}

