import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { changeLogin, userLogin, userLoginStart } from "../Actions/MainPageActions";

import Loading from "../Assets/DoubleRingLoading.svg";
import "../Assets/MainPageLogin.css";
import "../Assets/Transitions.css";

class MainPageLogin extends Component { 

    update = (event) => {
        this.props.dispatch(changeLogin(event.target.name, event.target.value))
    }

    authenticate = () => {
        if ( this.props.login.fetching ) {
            return
        }
        this.props.dispatch(userLoginStart())
        this.props.dispatch(userLogin(this.props.login.values.username, this.props.login.values.password))
    }

    render() {
        return (
            <ReactCSSTransitionGroup 
                component="div"
                className="login"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppearTimeout={600}
                transitionAppear={true}>
                <div className="input-field">
                    <input 
                        placeholder="" 
                        name="username" 
                        type="text" 
                        onChange={e => this.update(e)}
                        value={this.props.login.values.username} 
                    />
                    <label className={ this.props.login.values.username ? "active" : ""}>Username</label>
                </div>
                <div className="input-field">
                    <input 
                        placeholder="" 
                        name="password" 
                        type="password" 
                        onChange={e => this.update(e)}
                        value={this.props.login.values.password} 
                    />
                    <label className={ this.props.login.values.password ? "active" : ""}>Password</label>
                </div>

                <a  
                    className="waves-effect waves-light btn-large light-blue darken-1" 
                    onClick={this.authenticate}>
                        { this.props.login.fetching ? 
                            <img src={Loading} alt="WhiteDust Loader"/> : 
                            "Login" 
                        }
                </a>

                <div className="additional_links">
                    <p>Revive your account <Link to="/forgot">here!</Link></p>
                    
                    <p>Don&#39;t have an account yet? <Link to="/register">Register!</Link></p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

const mapStateToProps = (state) => { return { login: state.login } }

export default connect(mapStateToProps)(MainPageLogin);
