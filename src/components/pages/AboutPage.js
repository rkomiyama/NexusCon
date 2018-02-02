import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';

const AboutPage = () => (
  <div className="aboutPage">
    <Header />
    <NavBar />
    <section className="aboutPage-content">
      <p>
        Stuff and such for what MultiCon is all about.
      </p>
    </section>
  </div>
);

export default AboutPage;
