import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./components/LoginForm";
import AddFarmer from "./components/AddFarmer";
import AddReport from "./components/AddReport";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/addreport" component={AddReport} />
            <Route exact path="/addfarmer" component={AddFarmer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
