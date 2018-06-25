import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { userLogout, userLogoutStart } from "../Actions/MainPageActions";

import "../Assets/MainPageContinue.css";

class MainPageContinue extends Component {

    state = { redirect: false }

    logout = () => {
        this.props.dispatch(userLogoutStart())
        this.props.dispatch(userLogout())
        this.setState({ redirect: true })
    }

    render() {
        if ( !this.props.loggedIn || this.state.redirect ) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="welcome-back">
                <p>Welcome, <strong>{this.props.username}</strong>!</p>
                <div className="buttons">
                    <a to="/" onClick={this.logout} className="waves-effect waves-light btn-large light-blue darken-1">
                        Logout
                    </a>
                    <Link to="/panel" className="waves-effect waves-light btn-large light-blue darken-1">
                    Panel
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return { username: state.mainPage.user.username, loggedIn: state.mainPage.user.loggedIn } }

export default connect(mapStateToProps)(MainPageContinue);