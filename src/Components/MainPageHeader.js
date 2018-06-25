import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "../Assets/MainPage.css";

export default class MainPageHeader extends Component {
    render() {
        return (
            <div>
                <div className="mainpage">
                    <div className="header">
                        <Link to="/home" >
                            <div className="content">
                                <p><img src="https://lyvia.fi/src/img/logo/lyvia_logo_512.png" alt="WhiteDust Logo" /></p>
                                <h2>WhiteDust</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}


