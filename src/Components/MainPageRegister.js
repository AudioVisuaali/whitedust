import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { changeRegister, userRegisterStart, userRegister } from "../Actions/MainPageActions";

import Loading from "../Assets/DoubleRingLoading.svg";
import "../Assets/MainPageRegister.css";
import "../Assets/Transitions.css";

class MainPageRegister extends Component { 

    state = {

    }

    update = (event) => {
        this.props.dispatch(changeRegister(event.target.name, event.target.value))
        
        if ( !this.checkUsername(this.props.register.values.username) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Username too short"})
        } else if ( !this.validateEmail(this.props.register.values.email) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Invalid email"})
        }  else if ( !(this.props.register.values.password === this.props.register.values.passwordAgain) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Passwords do not match"})
        }  else if ( !this.hasUpperCase(this.props.register.values.password) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Password must contain uppercase letters"})
        }
    }

    register = () => {
        if ( this.props.register.fetching ) {
            return
        }
        if ( !this.checkUsername(this.props.register.values.username) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Username too short"})
        }
        
        if ( !this.validateEmail(this.props.register.values.email) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Invalid email"})
        }
         
        if ( this.props.register.values.password !== this.props.register.values.passwordAgain) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Passwords do not match"})
        }

        if ( !this.hasUpperCase(this.props.register.values.password) ) {
            this.props.dispatch({ type: "CHECK_USER_REJECTED", payload: "Password must contain uppercase letters"})
        }
        this.props.dispatch(userRegisterStart())
        this.props.dispatch(userRegister(this.props.register.values.username, this.props.register.values.email, this.props.register.values.password))
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkUsername = (username) => {
        if ( username.length < 6) {
            return false;
        }
        return true;
    }

    hasUpperCase = (str) => {
        return (/[A-Z]/.test(str));
    }

    render() {
        return (
            <ReactCSSTransitionGroup 
                component="div"
                className="register"
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
                        value={this.props.register.values.username} 
                    />
                    <label className={ this.props.register.values.username ? "active" : ""}>Username</label>
                </div>
                <div className="input-field">
                    <input 
                        placeholder="" 
                        name="email" 
                        type="email" 
                        onChange={e => this.update(e)}
                        value={this.props.register.values.email} 
                    />
                    <label className={ this.props.register.values.email ? "active" : ""}>Email</label>
                </div>
                <div className="input-field">
                    <input 
                        placeholder="" 
                        name="password" 
                        type="password" 
                        onChange={e => this.update(e)}
                        value={this.props.register.values.password} 
                    />
                    <label className={ this.props.register.values.password ? "active" : ""}>Password</label>
                </div>
                <div className="input-field">
                    <input 
                        placeholder="" 
                        name="passwordAgain" 
                        type="password" 
                        onChange={e => this.update(e)}
                        value={this.props.register.values.passwordAgain} 
                    />
                    <label className={ this.props.register.values.passwordAgain ? "active" : ""}>Password Again</label>
                </div>

                <p>{ this.props.register.error }</p>

                <a  
                    className="waves-effect waves-light btn-large light-blue darken-1" 
                    onClick={this.register}>
                        { this.props.register.fetching ? 
                            <img src={Loading} alt="WhiteDust Loader"/> : 
                            "Register" 
                        }
                </a>

                <div className="additional_links">
                    <p>Revive your account <Link to="/forgot">here!</Link></p>
                    <p>Already have an account? <Link to="/login">Login!</Link></p>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

const mapStateToProps = (state) => { return { register: state.register } }

export default connect(mapStateToProps)(MainPageRegister);