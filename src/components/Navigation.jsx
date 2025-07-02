import React from 'react';

import "../style/Navigation.css"
import travel_logo from "../Asset/travel-logo.png"

const Navigation = () => {
  return (
    <nav className="navbar fixed-top">
      <img className="navbar-logo" src={travel_logo}  alt="" />
      <ul className="navbar-links">
        <li><a href="#homeP">Home</a></li>
        <li><a href="#aboutP">About</a></li>
        <li><a href="#servicesP">Services</a></li>
        <li><a href="#contactP">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;