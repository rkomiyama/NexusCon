import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__list container">
      {siteMap.routes.map((route, i) => {
        return (
          <li className={`navbar__list-item${route.children ? '--parent' : ''}`} key={i}>
            {route.children &&
              <ul className="navbar__sub u-full-width">
                {route.children.map((childRoute, i) => {
                  return (
                    <li className="navbar__sub-item" key={i}>
                      <Link to={childRoute.link}>
                        {childRoute.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            }
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
