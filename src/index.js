import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./containers/Home/Home";
import App from "./containers/App";
import Profile from "./containers/Profile/Profile";
import Lesson from "./containers/Lesson/Lesson";
import Detail from "./containers/Detail/Detail";
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";

render(<Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/lesson" component={Lesson}/>
                <Route path="/detail/:lessonID" component={Detail}/>
                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Redirect to="/"/>
            </Switch>
        </App>
    </Router>
</Provider>, document.getElementById('root'));

