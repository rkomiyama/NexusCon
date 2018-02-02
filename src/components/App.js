import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GuestsPage from './pages/GuestsPage';
import RegistrationPage from './pages/RegistrationPage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path='/' component={FrontPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/activities' component={ActivitiesPage} />
          <Route path='/guests' component={GuestsPage} />
          <Route path='/registration' component={RegistrationPage} />
        </div>
      </BrowserRouter>
    );
  }
}
