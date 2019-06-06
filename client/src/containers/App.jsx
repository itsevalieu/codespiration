import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path='/' component={ Landing }/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
