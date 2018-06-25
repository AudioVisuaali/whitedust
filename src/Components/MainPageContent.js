import React, { Component } from 'react';
import { Route } from "react-router-dom";

import WelcomeBox from "./MainPageWelcomeBox";
import MainPageLogin from "./MainPageLogin";
import MainPageRegister from "./MainPageRegister";
import MainPageResetPassword from "./MainPageResetPassword";

export default class MainPageContent extends Component {
    render() {
        return (
            <div className="middle">
                <Route exact path="/" component={WelcomeBox}/>
                <Route exact path="/home" component={WelcomeBox}/>
                <Route exact path="/forgot" component={MainPageResetPassword}/>
                <Route exact path="/register" component={MainPageRegister}/>
                <Route exact path="/login" component={MainPageLogin}/>
                <Route exact path="/updates" component={WelcomeBox}/>
                <Route exact path="/continue" component={WelcomeBox}/>
            </div>
        );
    }
}
