import React, { Component } from 'react';

export default class MainPageUpdate extends Component {
    render() {
        const asd = new Date(this.props.update.timeStamp)
        const das = asd.getFullYear() + "." + ("0" + asd.getMonth()).slice(-2) + "." + ("0" + asd.getDate()).slice(-2) + " " + ("0" + asd.getHours()).slice(-2) + ":" + ("0" + asd.getMinutes()).slice(-2);
        return (
            <div className="col s12 m6">
            <div className="update">
                <h5>{ this.props.update.title } <span>({das})</span></h5>
                <div className="content">
                    {
                        this.props.update.changes.map(function(change) {
                            return( <MainPageUpdateChange update={change} /> )
                        })
                    }
                </div>
            </div>
            </div>
        )
    }
}

class MainPageUpdateChange extends Component {
    render() {
        if ( this.props.update.type === "+") {
            return(
                <p><i className="fas fa-plus"></i> {this.props.update.message}</p>
            )
        }
        if ( this.props.update.type === "-") {
            return(
                <p><i className="fas fa-minus"></i> {this.props.update.message}</p>
            )
        }
        if ( this.props.update.type === "/") {
            return(
                <p><i className="fas fa-wrench"></i> {this.props.update.message}</p>
            )
        }
    }
}