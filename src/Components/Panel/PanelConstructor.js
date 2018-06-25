import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "../../Assets/Panel/PanelConstructor.css";
import { userLogout, userLogoutStart } from "../../Actions/MainPageActions";

import Footer from "../MainPageFooter";

class PanelConstructor extends Component {

    state = { height: { height: 150 } }

    logOut = () => {
        this.props.dispatch(userLogoutStart())
        this.props.dispatch(userLogout())
    }

    resetBox = () => {
        this.props.dispatch({ type: "PART_EMPTY"})
    }

    setHeight = ( height ) => {
        this.setState({
            height: height
        })
    }

    render() {
        return (
            <div className="panel">
                <div className="user" onClick={ this.logOut } >
                    <p>{ this.props.user.username } <i className="fas fa-sign-out-alt"></i> </p>
                </div>
                <div className="top_bar">
                    <ul>
                        <li>
                            <NavLink exact to="/panel" activeClassName="active">User</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={ this.resetBox } to="/panel/builds" activeClassName="active">Builds</NavLink>
                        </li>
                    </ul>
                </div>
                <this.props.inner />
                <div className="filler" style={ this.state.height }>
                </div>
                <Footer setHeight={this.setHeight} />
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { 
        user: state.mainPage.user
    } 
}

export default connect(mapStateToProps)(PanelConstructor);
  
