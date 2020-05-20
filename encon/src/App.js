import React from "react";
import "./App.scss";
import { Login } from "./components/LogIn.js";
import { Nav } from "./components/Nav.js";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/Landing-Page";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <p>encon wow</p>
    </div>
  );
};
