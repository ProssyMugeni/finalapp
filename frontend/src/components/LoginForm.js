import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink , Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

function validate(loginId, password) {
    // true means invalid, so our conditions got reversed
    return {
      loginId:loginId.length === 0, //true if email is empty
      
      password: password.length === 0, //true if password is empty
    };
  }

class LoginForm extends Component {
    constructor() {
      super();
  
      this.state = {
        
        loginId: '',
        password: '',
        
        touched: {
         
          loginId: false,
          password: false,
        }
      };
    }
  
    handleloginIdChange = (evt) => {
        this.setState({ loginId: evt.target.value });
      }
      
      
      
      handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
      }
      
      handleBlur = (field) => (evt) => {
        this.setState({
          touched: { ...this.state.touched, [field]: true },
        });
      }
      
      handleSubmit = (evt) => {
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        }
        const {loginId, password } = this.state;
        alert(`Signed up with loginId: ${loginId} password: ${password}`);
      }
      
      canBeSubmitted() {
        const errors = validate(this.state.loginId,  this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }
      
    
    render() {
        const errors = validate( this.state.loginId, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        
        const shouldMarkError = (field) => {
          const hasError = errors[field];
          const shouldShow = this.state.touched[field];
          
          return hasError ? shouldShow : false; };

      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Login</h1>
            <form on submit={this.handleSubmit}noValidate>
          <div className="LoginId">
          <label htmlFor="LoginId">Login Id</label>
          <input
          className={shouldMarkError('loginId') ? "error" : ""}
          type="text"
          placeholder="Login Id"
          value={this.state.loginId}
          onChange={this.handleloginIdChange}
          onBlur={this.handleBlur('loginId')}
        />
        <span className={shouldMarkError('loginId') ? "error" : "hidden"}
        >invalid login Id</span>
        
          </div>
          <br/><br/>
          <div className="password">
          <label htmlFor="password">Password</label>
          <input
          className={shouldMarkError('password') ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          onBlur={this.handleBlur('password')}
        />
        <span className={shouldMarkError('password') ? "error" : "hidden"}
        >invalid password</span>
          </div>
          <div className="btn btn-success btn-sm">
          <button   className="btn btn-success btn-sm" type="submit">Login</button>
          </div>
          
          </form>
          </div>
        </div>
      );
    }
  }
  
  export default LoginForm;