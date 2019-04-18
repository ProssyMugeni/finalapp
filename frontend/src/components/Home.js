import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Link, NavLink , Redirect} from 'react-router-dom';
class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="welcome">
      <div className="container">
      <h1 >Welcome!</h1>
      <hr/>
      <p>At JicaPride our passion is to equip farmers with the best rice farming techniques throughour team of dedicated officers who monitor the progress of the rice farms.</p>
      {/* <p>Only Admin & Officers should Login</p> */}
      
      </div>
      </div>
   
   </Fragment>
    );
  }
}

export default Home;