import React, { Component, Fragment} from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import {Provider } from 'react-redux';
import store from './store'

// import AddFarmer from "./components/AddFarmer";
// import AddReport from "./components/AddReport";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import Header from './components/layout/Header';
import "./styles.css";
import Leads from './components/Leads';
import Reportlist from './components/layout/Reportlist';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
            <Fragment>
               <Header />
              
             <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/leads" component={Leads} />
                <Route exact path="/reportlist" component={Reportlist} />
                <Route exact path="/loginForm" component={LoginForm} />
                <Route exact path="/form" component={Form} />
              </Switch>
            </Fragment>
          </Router>
      </Provider>
    );
  }
}

export default App;
