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
                      onClick={() => {route.children ? this.toggleSubMenu(idx) : this.turnOffBodyScrollLock()}}
                      className="navburger__list-link">
                      {route.title}
                    </Link>
                    {route.children &&
                    <ul className="navburger__sub navburger__sub--hide u-full-width">
                      {route.children.map((childRoute, i) => {
                        return (
                          <li className="navburger__sub-item" key={i}>
                            <Link
                              to={childRoute.link}
                              onClick={this.turnOffBodyScrollLock}
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
    if (!subMenu.style.maxHeight || subMenu.style.maxHeight === '0px') {
      subMenu.style.maxHeight = '100%';
    } else {
      subMenu.style.maxHeight = '0';
    }
  }

  turnOffBodyScrollLock = () => {
    document.body.style.overflowY = 'auto';
  }

  toggleBodyScrollLock = () => {
    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
};
