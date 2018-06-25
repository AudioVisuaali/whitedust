import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

import PanelConstructor from "./PanelConstructor";
import PanelBuilds from "./PanelBuilds";
import PanelBuild from "./PanelBuild";
import PanelHome from "./PanelHome";

import MainPageLoading from "../MainPageLoading";

class Panel extends Component {

    state = { redirect: false }

    componentWillMount() {
        if ( !this.props.loggedIn ) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if ( this.props.fetching) {
            return <MainPageLoading />;
        }
        if ( !this.props.loggedIn && this.props.fetched ) {
            return <Redirect to='/'/>;
        }
        return (
            <div>
                <Route exact render={(props) => <PanelConstructor {...props} inner={PanelBuilds} />} path="/panel/builds" />
                <Route exact render={(props) => <PanelConstructor {...props} inner={PanelBuild} />} path="/panel/build" />
                <Route exact render={(props) => <PanelConstructor {...props} inner={PanelHome} />} path="/panel" />
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { 
        loggedIn: state.mainPage.user.loggedIn, 
        fetching: state.mainPage.fetching, 
        fetched: state.mainPage.fetched 
    } 
}

export default connect(mapStateToProps)(Panel);
  
  