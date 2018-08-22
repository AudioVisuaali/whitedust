import React, { Component } from 'react';

const MainPageUpdate = props => {
    const t = new Date(props.update.timeStamp)
    const das = t.getFullYear() + "." + ("0" + t.getMonth()).slice(-2) + "." + ("0" + t.getDate()).slice(-2) + " " + ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2);
    return (
        <div className="col s12 m6">
        <div className="update">
            <h5>{ props.update.title } <span>({das})</span></h5>
            <div className="content">
                {
                    props.update.changes.map(function(change) {
                        return( <MainPageUpdateChange update={change} /> )
                    })
                }
            </div>
        </div>
        </div>
    )
}
export default MainPageUpdate;

const MainPageUpdateChange = props => {
    if ( props.update.type === "+") {
            return(
                <p><i className="fas fa-plus"></i> {this.props.update.message}</p>
            )
        }
        if ( props.update.type === "-") {
            return(
                <p><i className="fas fa-minus"></i> {this.props.update.message}</p>
            )
        }
        if ( props.update.type === "/") {
            return(
                <p><i className="fas fa-wrench"></i> {this.props.update.message}</p>
            )
        }
}
