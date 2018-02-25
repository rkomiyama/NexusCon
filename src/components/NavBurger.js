import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

export default class NavBurger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parents: []
    };
  }

  componentDidMount() {
    let parents = [];

    siteMap.routes.map((route, idx) => {
      if (route.children) {
        parents.push(idx);
      }
    });

    this.setState({ parents });
  }

  render () {
    return (
      <nav className="navburger">
        <div id="menuToggle">
          <div className="navburger__list-header"></div>
          <input id="menuCheckbox" type="checkbox" onClick={this.toggleBodyScrollLock} />
          <span></span>
          <span></span>
          <span></span>
          <div className="navburger__list-wrapper u-full-width">
            <ul className="navburger__list">
              {siteMap.routes.map((route, idx) => {
                return (
                  <li className="navburger__list-item u-full-width" key={idx}>
                    <Link
                      to={route.link}
                      onClick={() => {route.children ? this.toggleSubMenu(idx) : this.turnOffBodyScrollLock(route.link)}}
                      className="navburger__list-link">
                      {route.title}
                    </Link>
                    {route.children &&
                    <ul className="navburger__sub u-full-width">
                      {route.children.map((childRoute, i) => {
                        return (
                          <li className="navburger__sub-item" key={i}>
                            <Link
                              to={childRoute.link}
                              onClick={() => this.turnOffBodyScrollLock(childRoute.link)}
                              className="navburger__sub-link">
                              {childRoute.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    }
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  toggleSubMenu = (parentIndex) => {
    const childIndex = this.state.parents.indexOf(parentIndex);
    const subMenu = document.getElementsByClassName('navburger__sub')[childIndex];
    if (!subMenu.style.height || subMenu.style.height === '0px' || subMenu.style.transform === 'scaleY(0)') {
      subMenu.style.transform = 'scaleY(1)';
      subMenu.style.height = 'auto';
    } else if (subMenu.style.transform === 'scaleY(1)') {
      subMenu.style.transform = 'scaleY(0)';
      setTimeout(() => { subMenu.style.height = '0px' }, 200);
    }
  }

  turnOffBodyScrollLock = (link) => {
    document.body.style.overflowY = 'auto';
    if (link === window.location.pathname) {
      document.getElementById('menuCheckbox').checked = false;
    }
  }

  toggleBodyScrollLock = () => {
    const checked = document.getElementById('menuCheckbox').checked;
    if (checked) {
      document.body.style.overflowY = 'hidden';
    } else if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    }
  }
};
