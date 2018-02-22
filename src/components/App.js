import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GuestsPage from './pages/GuestsPage';
import RegistrationPage from './pages/RegistrationPage';

import Media from 'react-media';
import Header from './Header';
import NavBar from './NavBar';
import NavBurger from './NavBurger';

export default class App extends React.Component {
  render() {
    const subPageTemplate = (title) => (
      <React.Fragment>
        <Header />
        <Media query="(max-width: 550px)">
          {(matches) => matches ? <NavBurger /> : <NavBar />}
        </Media>
        <h1>{title}</h1>
      </React.Fragment>
    );

    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path='/' component={FrontPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/activities' component={ActivitiesPage} />
          <Route path='/guests' component={GuestsPage} />
          <Route path='/registration' component={RegistrationPage} />
          <Route path='/link1' render={() => subPageTemplate('Link 1')} />
          <Route path='/link2' render={() => subPageTemplate('Link 2')} />
          <Route path='/link3' render={() => subPageTemplate('Link 3')} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
