import React, { Component } from 'react';


const Navbar = props => (
  <header className="toolbar">
      <nav className="toolbar_navigation">
          <div>
              
          </div>
          <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
              <ul>
                  <li><a href="/">Products</a></li>
                  <li><a href="/">users</a></li>
              </ul>
          </div>
      </nav>
  </header>
);
export default Navbar;