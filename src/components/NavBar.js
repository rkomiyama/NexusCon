import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__list">
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
        <Link to="#">
          Activities
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="#">
          Guests
        </Link>
      </li>
      <li className="navbar__list-item">
        <Link to="#">
          Registration
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
