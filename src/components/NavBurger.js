import React from 'react';
import { Link } from 'react-router-dom';
import siteMap from '../../siteMap';

export default class NavBurger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parents: [],
      checked: false
    };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick);
    let parents = [];

    siteMap.routes.map((route, idx) => {
      if (route.children) {
        parents.push(idx);
      }
    });

    this.setState({ parents });
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.pageClick);
  }

  render () {
    return (
      <nav className="navburger">
        <div
          className="navburger__list-header"
          ref={(node) => this.burgerHeaderRef = node}
        >
        </div>
        <div
          className={`navburger__icon ${this.state.checked ? 'open' : ''}`}
          onClick={() => this.toggleBodyScrollLock()}
          ref={(node) => this.burgerIconRef = node}
        >
          <span></span>
        </div>
        <div className={`${this.state.checked ? 'navburger__overlay' : ''}`}></div>
        <div className="navburger__list-wrapper" ref={(node) => this.wrapperRef = node}>
          <ul className="navburger__list">
            {siteMap.routes.map((route, idx) => {
              return (
                <li className="navburger__list-item u-full-width" key={idx}>
                  <Link
                    to={route.link}
                    onClick={() => {route.children ? this.toggleSubMenu(idx) : this.turnOffBodyScrollLock(route.link)}}
                    className="navburger__list-link"
                  >
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
                            className="navburger__sub-link"
                          >
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
      </nav>
    );
  }

  pageClick = (event) => {
    // allows toggleBodyScrollLock when clicking outside of wrapper *and* burger icon
    if (this.state.checked &&
      ((this.wrapperRef && !this.wrapperRef.contains(event.target)) &&
      (this.burgerIconRef && !this.burgerIconRef.contains(event.target)) &&
      (this.burgerHeaderRef && !this.burgerHeaderRef.contains(event.target)))) {
      this.toggleBodyScrollLock();
    }
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
      this.setState({ checked: false });
    }
  }

  toggleBodyScrollLock = () => {
    if (this.state.checked) {
      document.body.style.overflowY = 'auto';
      this.setState({ checked: false });
    } else {
      document.body.style.overflowY = 'hidden';
      this.setState({ checked: true });
    }
  }
};
