import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

// Router component to handler page redirects
export default function Controller(props) {
    
    const isLoggedIn = () => window.sessionStorage.getItem('access-token')!=null && window.sessionStorage.getItem('access-token')!=="";
    
    return (
        <Switch>
            <Route exact path='/' render={({ history }, props) => !isLoggedIn() ? (<Login {...props} history={history} />) :(<Redirect to='/home' />)} />
            <Route exact path='/userhome' render={({ history }, props) => !isLoggedIn() ? (<Login {...props} history={history} />) :(<Redirect to='/home' />)} />
            <Route exact path='/login' render={({ history }, props) => !isLoggedIn() ? (<Login {...props} history={history} />) :(<Redirect to='/home' />)} />
            <Route exact path='/home' render={({ history }, props) => isLoggedIn() ? (<Home {...props} history={history} />) : (<Redirect to='/login' />)} />
            <Route exact path='/profile' render={({ history }, props) => isLoggedIn() ? (<Profile {...props} history={history} />) : (<Redirect to='/login' />)} />
        </Switch>
    );
}
