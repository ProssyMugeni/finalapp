import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Link, NavLink , Redirect} from 'react-router-dom';
import logo from "../components/logo.png";
import "../styles.css";

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            login_id: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
        return <Redirect to='/Home' />
    }

    render() {
        return (
                 <Fragment>
          <div className="App">
          <div className="App__Aside">
            <img src={logo} alt="Logo" />
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <a href='/administrator/login/?next=/administrator/'
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Admin
              </a>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>
            </div>
 
          </div>
        </div>

        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="login_id">Login Id</label>
                <input type="text" id="login_id" className="FormField__Input" placeholder="Enter your Login Id" name="login_id" value={this.state.login_id} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/Admin" className="FormField__Link">SignIn As Admin </Link>
              </div>
            </form>
          </div>
          </Fragment>
        );
    }
}

export default SignInForm;