import React from 'react';
import BgImage from '../assets/images/bg.jpg';

const Header = () => (
  <section className="header" style={{'backgroundImage': 'url(' + BgImage + ')'}}>
    <div className="container">
      <h1 className="header__heading">MultiCon</h1>
    </div>
  </section>
);

export default Header;
