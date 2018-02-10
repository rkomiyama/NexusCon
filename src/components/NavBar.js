import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__list container">
      {siteMap.routes.map((route, i) => {
        return (
          <li className="navbar__list-item" key={i}>
            <Link to={route.link}>
              {route.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default NavBar;
