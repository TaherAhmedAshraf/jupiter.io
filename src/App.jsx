import React from 'react';
import Home from './JSX/Home'
import Service from './JSX/Service'
import Contact from './JSX/Contact'
import About from './JSX/About'
import Navbar from "./JSX/Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;