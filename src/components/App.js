import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path='/' component={FrontPage} />
          <Route path='/about' component={AboutPage} />
        </div>
      </Router>
    );
  }
}
