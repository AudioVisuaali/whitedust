import React, { Component } from 'react';
import { fetchInspect, fetchInspectStart } from "../../Actions/InspectActions";
import { connect } from "react-redux";

import MainPageLoading from "../MainPageLoading";
import Footer from "../MainPageFooter";
import InspectItem from "./InspectItem";
import InspectItemInterested from "./InspectItemInterested";
import InspectTotal from "./InspectTotal";

import "../../Assets/Inspect/Inspect.css";

class Inspect extends Component {

    state = { height: { height: 181.32 } }

    componentWillMount() { document.body.style.backgroundColor = "#ffffff"; }

    componentWillUnmount() { document.body.style.backgroundColor = "#282828"; }

    setHeight = ( height ) => {
        this.setState({
            height: height
        })
    }

    componentDidMount() {
        if ( !this.props.build.fetced ) {
            this.props.dispatch(fetchInspectStart())
            this.props.dispatch(fetchInspect(this.props.match.params.id))
        }
    }

    itemRender = ( item ) => {
        return(
            <div key={ item.id }>
                <InspectItem item={ item } currency={ this.props.build.currency }/>
            </div>
        )
    }

    render() {
        const build = this.props.build
        if ( this.props.fetching ) {
            return(
                <MainPageLoading />
            )
        }
        if ( this.props.fetched ) {
            return(
                <div className="inspect">
                    <div className="head" >
                        <div className="logo">
                            <img src={ build.picture } alt={ build.name }/>
                        </div>
                        <div className="text">
                            <h2>{ build.name }</h2>
                            <p>Contains { build.partList.length} items worth of ----{ build.currency }</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                this.props.build.partList
                                .map( this.itemRender )
                                .reduce((prev, curr) => [prev, <div className="divider"></div>, curr])
                            }
                            <div className="divider"></div>
                            <InspectTotal price={ build.totalAmount } currency={ build.currency}/>
                            <div className="divider"></div>
                            <InspectItemInterested />
                        </div>
                    </div>
                    <div className="filler" style={ this.state.height }></div>
                    <Footer setHeight={ this.setHeight } />
                </div>
            )
        }
        return (
            "Build not found"
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        build: state.inspect.build,
        fetched: state.inspect.fetched,
        fetching: state.inspect.fetching
    } 
}

export default connect(mapStateToProps)(Inspect);