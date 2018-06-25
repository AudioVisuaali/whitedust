import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WD_logo from "../Assets/WD_logo.png";

import "../Assets/MainPage.css";

import Footer from "./MainPageFooter";

export default class MainPage extends Component {
    
    state = { height: { height: 180 } }

    setHeight = ( height ) => {
        console.log(height.height)
        this.setState({
            height: height
        })
    }

    render() {
        return (
            <div className="front noselect  ">
                <div className="mainpage">
                    <div className="header">
                        <div className="content">
                            <Link to="/" >
                                <p><img src={ WD_logo } alt="WhiteDust Logo" /></p>
                                <h2>WhiteDust</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="contents">
                        <this.props.inner />
                    </div>
                </div>
                <div className="filler" style={ this.state.height }></div>
                <Footer setHeight={ this.setHeight }/>
            </div>
        );
    }
}