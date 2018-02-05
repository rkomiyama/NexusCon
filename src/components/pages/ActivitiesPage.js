import React from 'react';
import Media from 'react-media';
import Header from '../Header';
import NavBar from '../NavBar';
import NavBurger from '../NavBurger';

const ActivitiesPage = () => (
  <div className="activitiesPage">
    <Header />
    <Media query="(max-width: 550px)">
      {(matches) => matches ? <NavBurger /> : <NavBar />}
    </Media>
    <section className="activitiesPage-content container">
      <p>
        There is so much room for activities!
      </p>
    </section>
  </div>
);

export default ActivitiesPage;
