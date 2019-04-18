import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route, Link, NavLink , Redirect} from 'react-router-dom';
import logo from "./logo.png";
import Reportlist from './Reportlist';
import Home from '../../components/Home';


export class Header extends Component {
  render() {
    return (
       <Fragment>
           <header className="site-header">
  <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
    <div className="container">
      <a className="navbar-brand mr-4" href="/"><img src={logo} alt="logo" width="100" height="100"></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggle">
        <div className="navbar-nav mr-auto">
          <Link className="nav-item nav-link" to="/home">Home</Link>

          <Link className="nav-item nav-link" to="reportlist">Report</Link>
          <Link className="nav-item nav-link" to="leads">Farmers</Link>
        </div>
        {/* Navbar Right Side  */}
        <div className="navbar-nav">

          <Link className="nav-item nav-link" to="/loginform">Login</Link>

          <a className="nav-item nav-link" href="/administrator/login/?next=/administrator/">Admin</a>
        </div>
      </div>
    </div>
  </nav>
</header>
       </Fragment>
          
    )
  }
}

export default Header
