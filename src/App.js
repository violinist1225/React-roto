import React from "react"
import MainView from "./MainView"
import NavBar from "./NavBar"
import Footer from "./Footer"
import {Switch, Link,Route } from "react-router-dom"

export default function App() {
  return (
    <div className="appWrapper">
      <NavBar  >

        <Link to="/">MainView</Link>
        <Link to="/NavBar">NavBar</Link>
        <Link to="./Footer">Footer</Link>
      </NavBar>

      <div className="body">
        <Switch>
          <Route exact path="/"><MainView /></Route>
          <Route path="/NavBar"><NavBar /></Route>
          <Route path="Footer"> <Footer /></Route>
        </Switch>
        </div>
      <Footer />

    </div>
  );
}

