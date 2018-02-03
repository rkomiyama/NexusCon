import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__list container">
      <li className="navbar__list-item">
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/about">
          About Us
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/activities">
          Activities
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/guests">
          Guests
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="/registration">
          Registration
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
