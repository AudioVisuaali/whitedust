import React, { Component } from 'react';

export default class InspectItem extends Component {
    render() {
        return(
            <div className="col s12">
                <div className="grading trans_200">
                    <a href={ this.props.item.link } target="_blank">
                        <div className="item">
                            <div className="picture trans_400">
                                <img src={ this.props.item.icon } alt={ this.props.item.title}/>
                            </div>
                            <div className="information">
                                <h4>{ this.props.item.title}</h4>
                                <p>{ this.props.item.info }</p>
                                <p>{ parseFloat(Math.round(this.props.item.price * 100) / 100).toFixed(2) + this.props.currency }</p>
                            </div>
                            <div className="link trans_200">
                                <p>
                                    <i class="fas fa-link"></i>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}