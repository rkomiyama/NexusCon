import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

export default class NavBurger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parents: {}
    };
  }

  componentWillMount() {
    let parents = {};
    let length = 0;
    siteMap.routes.map((route, i) => {
      if (route.children) {
        parents[i] = length++;
      }
    });
    if (length > 0) {
      this.setState({ parents });
    }
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
              {siteMap.routes.map((route, i) => {
                if (route.children) {
                  return (
                    <li className="navburger__list-item navburger__list-item--parent u-full-width" key={i}>
                      <ul className="navburger__sub u-full-width">
                        {route.children.map((childRoute, i) => {
                          return (
                            <li className="navburger__sub-item" key={i}>
                              <Link to={childRoute.link}>
                                {childRoute.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <Link to={route.link} onClick={() => this.toggleSubMenuOn(i)}>
                        {route.title}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li className="navburger__list-item u-full-width" key={i}>
                      <Link to={route.link}>
                        {route.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  toggleSubMenuOn = (index) => {
    let mainMenu = document.getElementsByClassName('navburger__list-item')[0];
    let items = document.getElementsByClassName('navburger__list-item');
    for(let i = 0; i < items.length; i++) {
      items[i].style.position = 'absolute';
      items[i].style.transform = 'translate(-100%)';
    }
    let subMenu = document.getElementsByClassName('navburger__sub')[this.state.parents[index]];
    subMenu.style.visibility = 'visible';
  }

  toggleBodyScrollLock = () => {
    if (document.getElementById('menuCheckbox').checked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }
};
