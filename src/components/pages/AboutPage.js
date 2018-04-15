import React from 'react';
import Media from 'react-media';
import Header from '../Header';
import NavBar from '../NavBar';
import NavBurger from '../NavBurger';

const AboutPage = () => (
  <div className="aboutPage">
    <Header />
    <Media query="(max-width: 550px)">
      {(matches) => matches ? <NavBurger /> : <NavBar />}
    </Media>
    <section className="aboutPage-content container">
      <p>
        Stuff and such for what NexusCon is all about.
      </p>
    </section>
  </div>
);

export default AboutPage;
