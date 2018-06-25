import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";

import MainPage from "./MainPage";
import MainPageLoading from "./MainPageLoading";
import MainPageContinue from "./MainPageContinue";

import "../Assets/MainPageContent.css";
import "../Assets/Transitions.css";

class MainPageChecks extends Component {

    render() {
        if ( this.props.mainPageLoading ) {
            return (
                <MainPageLoading /> 
            );
        }
        if ( this.props.mainPageLoggedin ) {
            if ( this.props.location.pathname !== "/continue") {
                return <Redirect to='/continue'/>;
            }
            return (
                <MainPage inner={MainPageContinue}/> 
            );
        }
        return (
                <MainPage inner={this.props.inner}/> 
        );
    }
}

const mapStateToProps = (state) => { 
    return { 
        mainPageLoading: state.mainPage.fetching,
        mainPageLoggedin: state.mainPage.user.loggedIn
    } 
}

export default connect(mapStateToProps)(MainPageChecks);




