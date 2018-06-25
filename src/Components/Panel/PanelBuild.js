import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { buildFetchStart, buildFetch } from "../../Actions/PanelActions";
import PanelBuildCard from "./PanelBuildCard";
import PanelBuildBox from "./PanelBuildBox";
import PanelBuildImage from "./PanelBuildImage";
import PanelBuildCurrency from "./PanelBuildCurrency";

import WDLoading from "../../Assets/DoubleRingLoading.svg"
import "../../Assets/Panel/PanelBuild.css";

class PanelBuild extends Component {

    state = { 
        addComponent: false, 
        redirect: false, 
        titleChange: false, 
        customizing: false,
        picturePanel: false,
        pictureError: false
    }

    componentWillMount() {
        if ( !this.props.build.fetched && !this.props.build.new ) {
            this.props.dispatch(buildFetchStart())
            this.props.dispatch(buildFetch(this.props.build.Id))
        }
    }

    partCard = ( part ) => {
        return ( 
            <div key={ part.id } className="part">
                <PanelBuildCard 
                    part={ part } 
                    modifyPart={ this.modifyPart }
                    currency={ this.props.build.currency } 
                    returnPart={ this.removePart }
                />
            </div>
        );
    }

    modifyPart = ( part ) => {
        this.props.dispatch({ type: "PART_LOAD", payload: part})
        this.setState({
            addComponent: true,
            customizing: true
        })
    }

    addPart = ( part ) => {
        if ( this.state.customizing ) {
            this.props.dispatch({ type: "BUILD_CUSTOMIZE_ITEM", payload: part })
        } else {
            this.props.dispatch({ type: "BUILD_ADD_ITEM", payload: part })
        }
        this.setState({
            addComponent: false,
            customizing: false
        })
    }

    updateBuild = () => {
        if ( this.props.build.new ) {
            this.props.dispatch({ type: "ADD_NEW_BUILDS", payload: this.props.build })      
        } else {
            this.props.dispatch({ type: "UPDATE_BUILDS", payload: this.props.build })
        }
        this.setState({
            redirect: true
        })
    }

    removePart = ( part ) => {
        this.props.dispatch({ type: "BUILD_REMOVE_PART", payload: part})
    }

    partAddToggle = () => {
        this.props.dispatch({ type: "PART_EMPTY"})
        this.setState({ addComponent: this.state.addComponent ? false : true })
    }

    removeBuild = () => {
        this.props.dispatch({ type: "BUILDS_REMOVE_BUILD", payload: this.props.build })
        this.setState({ redirect: true })
    }

    redirectClick = () => {
        this.props.dispatch({ type: "PART_EMPTY"})
        this.setState({ redirect: true })
    }

    textFieldToggle = () => {
        this.setState({ titleChange: this.state.titleChange ? false : true })
    }

    picturePanelToggle = () => {
        this.setState({ picturePanel: this.state.picturePanel ? false : true })
    }

    update = (e) => {
        this.props.dispatch({ type: "BUILD_LOAD", payload: { name: e.target.value } })
    }

    pictureError = () => {
        this.setState({
            pictureError: true
        })
    }

    render() {
        if ( this.props.build.fetching ) {
            return (
                <div className="loading">
                    <img src={WDLoading} alt="WD Loading"/> 
                </div>
            );
        }
        if ( this.state.redirect ) {
            return <Redirect to='/panel/builds'/>;
        }
        return (
            <div className="">
                {
                    this.state.addComponent ? 
                        <PanelBuildBox toggleMenu={ this.partAddToggle } addPart={this.addPart} /> : ""
                }
                {
                    this.state.picturePanel ? 
                        <PanelBuildImage toggleMenu={ this.picturePanelToggle } />: ""
                }
                <div className="build">
                    <div className="controls">
                        <div className="right" onClick={ this.partAddToggle }>
                            <h5><i className="fas fa-plus"></i></h5>
                        </div>
                        <div className="left" onClick={ this.redirectClick }>
                            <h5><i className="fas fa-arrow-left"></i></h5>
                        </div> 
                    </div>
                    <div className="casing">
                        <div className="picture" onClick={ this.picturePanelToggle}>
                        {
                            this.props.build.picture ? 
                            <img src={ this.props.build.picture } alt={ this.props.build.name } /> :
                            <i className="far fa-images"></i>
                        }
                        </div>
                        <div className="information">
                        
                            {
                                this.state.titleChange ?  
                                    <div className="input-field">
                                        <textarea 
                                            name="build_name" 
                                            onChange={ e => this.update(e) } 
                                            value={ this.props.build.name } 
                                            id="textarea1" 
                                            className="materialize-textarea"
                                        />
                                        <i className="fas fa-check" onClick={ this.textFieldToggle }></i>
                                    </div> : 
                                        <h4 onClick={ this.textFieldToggle }>
                                            <i className ="fas fa-edit"></i>
                                            { this.props.build.name }
                                        </h4>
                            }
                            <p>Containing { this.props.build.partList.length } items worth of { this.props.build.totalAmount + this.props.build.currency }</p>
                            <PanelBuildCurrency />
                        </div>  
                    </div>
                    <Buttons updateBuild={ this.updateBuild } removeBuild={this.removeBuild} />
                    <div className="parts">
                    {
                        this.props.build.partList.map( this.partCard )
                    }
                    </div>
                </div>
            </div>
        );
    }
}

class Buttons extends Component {
    render() {
        return(
            <div className="buttons">
                <button className="save waves-effect waves-light btn-large light-blue darken-1" onClick={ this.props.updateBuild }>
                    <i className="far fa-save"></i>
                </button>
                <button className="remove waves-effect waves-light btn-large light-blue darken-1" onClick={ this.props.removeBuild }>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        )
    }
}


const mapStateToProps = (state) => { 
    return { build: state.build } 
}
  
export default connect(mapStateToProps)(PanelBuild);
