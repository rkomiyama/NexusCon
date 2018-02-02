import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';

const GuestsPage = () => (
  <div className="guestsPage">
    <Header />
    <NavBar />
    <section className="guestsPage-content">
      <p>
        See all the cool people!
      </p>
    </section>
  </div>
);

export default GuestsPage;
