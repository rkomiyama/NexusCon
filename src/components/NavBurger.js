import React from 'react';
import { Link } from 'react-router-dom';

const NavBurger = () => {
  const toggleBodyScrollLock = () => {
    let checked = document.getElementById('menuCheckbox').checked;
    if (checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  return (
    <nav className="navburger">
      <div id="menuToggle">
        <div>
          <input id="menuCheckbox" type="checkbox" onClick={toggleBodyScrollLock} />
          <span></span>
          <span></span>
          <span></span>
          <ul className="navburger__list u-full-width">
            <li className="navburger__list-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/activities">
                Activities
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/guests">
                Guests
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/registration">
                Registration
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/activities">
                Activities
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/guests">
                Guests
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/registration">
                Registration
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/activities">
                Activities
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/guests">
                Guests
              </Link>
            </li>
            <li className="navburger__list-item">
              <Link to="/registration">
                Registration
              </Link>
            </li>
          </ul>
        </div>
        <div className="navburger__list-header"></div>
      </div>
    </nav>
  );
};

export default NavBurger;
