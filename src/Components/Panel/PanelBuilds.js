import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";

import PanelBuildsCard from "./PanelBuildsCard";
import { buildsFetchStart, buildsFetch } from "../../Actions/PanelActions";

import "../../Assets/Panel/PanelBuilds.css";
import WDLoading from "../../Assets/DoubleRingLoading.svg"

class PanelBuilds extends Component {

    state = { redirect: false }

    componentWillMount() {
        if ( !this.props.builds.fetched ) {
            this.props.dispatch(buildsFetchStart())
            this.props.dispatch(buildsFetch())
        }
    }

    addBuild = () => {
        this.props.dispatch({ type: "BUILD_LOAD_NEW" })
        this.setState({
            redirect: true
        })
    }

    reload = () => {
        this.props.dispatch(buildsFetchStart())
        this.props.dispatch(buildsFetch())
    }

    render() {
        if ( this.state.redirect ) {
            return <Redirect to='/panel/build'/>;
        }
        if ( this.props.builds.fetching ) {
            return (
                <div className="loading">
                    <img src={WDLoading} alt="WD Loading"/> 
                </div>
            );
        }
        if ( this.props.builds.builds.length === 0 && this.props.builds.fetched ) {
            return (
                <div className="no_builds">
                    <h2>No builds</h2>
                </div>
            );
        }
        return (
            <div className="builds">
                <div className="controls">
                    <div className="right" onClick={ this.addBuild }>
                        <h5><i className="fas fa-plus"></i></h5>
                    </div>
                    <div className="left" onClick={ this.reload } >
                        <h5><i className="fas fa-sync-alt"></i></h5>
                    </div>   
                </div> 
                {
                    this.props.builds.builds.map(function(build) {
                        return ( 
                            <div key={build.id}>
                                <PanelBuildsCard build={build} />
                            </div>
                        );
                    })
                }
                { this.props.builds.length > 8 ? "<h5>Add a new build</h5>" : "" }
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { builds: state.builds } 
}

export default connect(mapStateToProps)(PanelBuilds);
  
  