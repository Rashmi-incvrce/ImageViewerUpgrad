import React, { Component } from 'react';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Controller extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
      <div className="main-container">
        <Route exact path='/' render={({history},props) => <Login history={history}  {...props}/>} />
        <Route path='/home' render={({history},props) => <Home history={history} {...props} />} />
        <Route path='/profile' render={({history},props) => <Profile history={history} {...props} />} />
      </div>
    </Router>
    )
  }
}

export default Controller;
