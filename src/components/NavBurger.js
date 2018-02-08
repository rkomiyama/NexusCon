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
            <Link to="/">
              <li className="navburger__list-item">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="navburger__list-item">
                About Us
              </li>
            </Link>
            <Link to="/activities">
              <li className="navburger__list-item">
                Activities
              </li>
            </Link>
            <Link to="/guests">
              <li className="navburger__list-item">
                Guests
              </li>
            </Link>
            <Link to="/registration">
              <li className="navburger__list-item">
                Registration
              </li>
            </Link>
          </ul>
        </div>
        <div className="navburger__list-header"></div>
      </div>
    </nav>
  );
};

export default NavBurger;
