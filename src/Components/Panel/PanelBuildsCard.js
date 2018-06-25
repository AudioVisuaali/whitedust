import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";

import "../../Assets/Panel/PanelBuildsCard.css";

class PanelBuildsCard extends Component {

    state = { redirect: false }

    customizeBuild = () => {
        this.props.dispatch({ 
            type: "BUILD_LOAD", 
            payload: { 
                buildId: this.props.build.buildId, 
                fetching: false,
                fetched: false, 
            } 
        })
        this.setState({
            redirect: true
        })
    }
    
    openLink = () => {
        
    }

    copyLink = () => {
        
    }

    render() {
        if ( this.state.redirect ) {
            return <Redirect to='/panel/build'/>;
        }
        return (
            <div className="card casing trans_200">
                <div className="editable" onClick={ this.customizeBuild }>
                    <div className="picture">
                        <img src={ this.props.build.picture } alt={ this.props.build.buildName } />
                    </div>
                    <div className="information">
                        <h2>{ this.props.build.name }</h2>
                        <p>Containing { this.props.build.partList.length } items worth of { parseFloat(Math.round(this.props.build.totalAmount * 100) / 100).toFixed(2) + this.props.build.currency }</p>
                    </div>
                </div>
                <div className="customize trans_200">
                    <p className="openlink trans_200" onClick={ this.openLink }><i className="fas fa-link"></i></p>
                    <p className="copylink trans_200" onClick={ this.copyLink }><i className="fas fa-copy"></i></p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { builds: state.builds } 
}

export default connect(mapStateToProps)(PanelBuildsCard);
