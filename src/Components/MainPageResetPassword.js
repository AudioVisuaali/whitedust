import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Loading from "../Assets/DoubleRingLoading.svg";
import "../Assets/MainPageResetPassword.css";
import "../Assets/Transitions.css";

import { recoverPasswordRequest, changeRecover } from "../Actions/MainPageActions";

class MainPageResetPassword extends Component { 

    state = { recovered: false }

    recover = (event) => {
        this.props.dispatch(recoverPasswordRequest(this.props.recover.values.username))
        this.setState({ recovered: true })
    }

    update = (event) => {
        this.props.dispatch(changeRecover(event.target.name, event.target.value))

    }

    render() {
        if ( this.state.recovered ) {
            return (
                <ReactCSSTransitionGroup 
                component="div"
                className="resetpassword"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppearTimeout={600}
                transitionAppear={true}>
                    <div className="past">
                        <h5>If there is an account found with that name an email will be sent to that accounts email!</h5>
                        <Link to="/" className="waves-effect waves-light btn-large light-blue darken-1">
                        Go back
                        </Link>
                    </div>
                </ReactCSSTransitionGroup>
            )
        }
        return (
            <ReactCSSTransitionGroup 
                component="div"
                className="resetpassword"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppearTimeout={600}
                transitionAppear={true}>

                <h4>Revive account</h4>
                <div className="input-field">
                <input 
                    placeholder="" 
                    name="username" 
                    type="text" 
                    onChange={e => this.update(e)}
                    value={ this.props.recover.values.username }
                />
                <label >Username</label>
                </div>

                <a  
                    className="waves-effect waves-light btn-large light-blue darken-1" 
                    onClick={this.recover}
                    >
                        { this.props.recover.fetching ? 
                            <img src={Loading} alt="WhiteDust Loader"/> : 
                            "Revive" 
                        }
                </a>

                <div className="additional_links">
                    <p>Missclicked? Go <Link to="/" >back!</Link></p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

const mapStateToProps = (state) => { return { recover: state.recover } }

export default connect(mapStateToProps)(MainPageResetPassword);