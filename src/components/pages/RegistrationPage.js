import React from 'react';
import Media from 'react-media';
import Header from '../Header';
import NavBar from '../NavBar';
import NavBurger from '../NavBurger';

const RegistrationPage = () => (
  <div className="registrationPage">
    <Header />
    <Media query="(max-width: 550px)">
      {(matches) => matches ? <NavBurger /> : <NavBar />}
    </Media>
    <section className="registrationPage-content container">
      <p>
        Register now!
      </p>
    </section>
  </div>
);

export default RegistrationPage;
