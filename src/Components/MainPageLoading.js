import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Loading from "../Assets/DoubleRingLoading.svg";
import "../Assets/Transitions.css";

const MainPageContent = () => {
    return (
        <ReactCSSTransitionGroup 
            component="div"
            className="loader loadshadow"
            transitionName="route"
            transitionEnterTimeout={60}
            transitionLeaveTimeout={40}
            transitionAppearTimeout={60}
            transitionAppear={true}>
            <img src={Loading} alt="WhiteDust Loader"/>
        </ReactCSSTransitionGroup>
    )
}
export default MainPageContent;
