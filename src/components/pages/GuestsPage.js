import React from 'react';
import Media from 'react-media';
import Header from '../Header';
import NavBar from '../NavBar';
import NavBurger from '../NavBurger';

const GuestsPage = () => (
  <div className="guestsPage">
    <Header />
    <Media query="(max-width: 550px)">
      {(matches) => matches ? <NavBurger /> : <NavBar />}
    </Media>
    <section className="guestsPage-content container">
      <p>
        See all the cool people!
      </p>
    </section>
  </div>
);

export default GuestsPage;
