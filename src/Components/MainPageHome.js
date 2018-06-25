import React, { Component } from 'react';

import "../Assets/WelcomeBox.css";
import { Link } from "react-router-dom";

import MainPageHeader from "./MainPageHeader";
import MainPageWelcomeBox from "./MainPageWelcomeBox"; 
import Footer from "./MainPageFooter";

export default class MainPageHome extends Component { 
    render() {
        return (
            <div>
                <MainPageHeader />
                <MainPageWelcomeBox />
                <Footer />
            </div>
            
        );
    }
}