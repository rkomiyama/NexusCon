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
                return (
                  <li className="navburger__list-item u-full-width" key={i}>
                    {route.children &&
                      <ul className="navburger__sub u-full-width">
                        <li className="navburger__sub-item">
                          <Link to="#" onClick={() => this.goBack(i)}>
                            Back
                          </Link>
                        </li>
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
                    }
                    <Link to={route.link} onClick={() => {route.children && this.toggleSubMenuOn(i)}}>
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
  }

  goBack = (index) => {
    let subMenu = document.getElementsByClassName('navburger__sub')[this.state.parents[index]];
    subMenu.style.visibility = 'hidden';
    let items = document.getElementsByClassName('navburger__list-item');
    for(let i = 0; i < items.length; i++) {
      items[i].style.position = 'relative';
      items[i].style.transform = 'translate(0)';
    }
    let mainMenu = document.getElementsByClassName('navburger__list')[0];
    mainMenu.style.visibility = 'visible';
  }

  toggleSubMenuOn = (index) => {
    let items = document.getElementsByClassName('navburger__list-item');
    for(let i = 0; i < items.length; i++) {
      items[i].style.position = 'absolute';
      items[i].style.transform = 'translate(-100%)';
    }
    let subMenu = document.getElementsByClassName('navburger__sub')[this.state.parents[index]];
    subMenu.style.visibility = 'visible';
    let mainMenu = document.getElementsByClassName('navburger__list')[0];
    mainMenu.style.visibility = 'hidden';
  }

  toggleBodyScrollLock = () => {
    if (document.getElementById('menuCheckbox').checked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }
};
