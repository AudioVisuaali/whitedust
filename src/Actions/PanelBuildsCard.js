import React, { Component } from 'react';

import "../../Assets/Panel/PanelBuildsCard.css";

export default class PanelBuildsCard extends Component {
    render() {
        return (
            <div kay={this.props.build.id} className="casing">
                <h2>{this.props.build.buildName}</h2>
            </div>
        );
    }
}
