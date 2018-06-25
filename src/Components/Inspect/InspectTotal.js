import React, { Component } from 'react';

import "../../Assets/Inspect/InspectTotal.css"

export default class InspectTotal extends Component {
    render() {
        return(
            <div className="total col s12">
                <div className="grading trans_200">
                    <div className="information">
                        <h4>Total: { this.props.price + this.props.currency }</h4>
                    </div>
                </div>
            </div>
        )
    }
}