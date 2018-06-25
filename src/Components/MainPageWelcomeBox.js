import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../Assets/WelcomeBox.css";

export default class WelcomeBox extends Component { 
    render() {
        return (
            <div className="welcomeBox">
                <div className="buttons">
                    <Link to="/login" className="waves-effect waves-light btn-large light-blue darken-1">
                        Login
                    </Link>
                    <Link to="/register" className="waves-effect waves-light btn-large light-blue darken-1">
                    Register
                    </Link>
                </div>
                <div className="info">
                    <h4>What is whiteDust for? Well WhiteDust is meant for sharing computer builds. This service open for anyone</h4>

                </div>
                <div className="info">
                    <h5>Here's an example how the build will look!</h5>
                    <Link to="/inspect/example" className="waves-effect waves-light btn-large light-blue darken-1">
                        Example build
                    </Link>
                </div>
                <div className="info">
                    <h5>Update Log</h5>
                    <Link to="/updates" className="waves-effect waves-light btn-large light-blue darken-1">
                        Update Log
                    </Link>
                </div>
            </div>
        );
    }
}