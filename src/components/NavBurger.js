import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

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
        <div className="navburger__list-header"></div>
        <div>
          <input id="menuCheckbox" type="checkbox" onClick={toggleBodyScrollLock} />
          <span></span>
          <span></span>
          <span></span>
          <ul className="navburger__list u-full-width">
            {siteMap.routes.map((route, i) => {
              return (
                <li className="navburger__list-item" key={i}>
                  <Link to={route.link}>
                    {route.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBurger;
