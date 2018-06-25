import React, { Component } from 'react';
import { connect } from "react-redux";

import "../../Assets/Panel/PanelBuildCard.css";

class PanelBuildCard extends Component {

    removePart = () => {
        if ( this.props.returnPart ) {
            this.props.returnPart( this.props.part )
        }
    }
    
    modifyPart = () => {
        if ( this.props.modifyPart ) {
            this.props.modifyPart( this.props.part )
        }
    }

    render() {
        return (
            <div className="item">
                <a href={ this.props.part.link } target="_blank">
                    <div className="colored">
                        <div className="casing trans_200">
                            <div className="picture">
                                <img src={ this.props.part.icon } alt={ this.props.part.info } />
                            </div>
                            <div className="information">
                                <h4>{ this.props.part.title }</h4>
                                <p>{ this.props.part.info }</p>
                                <p>{ parseFloat(Math.round(this.props.part.price * 100) / 100).toFixed(2) + this.props.currency }</p>
                            </div>
                        </div>
                    </div>
                </a>
                <div className="button">
                    <div className="modify trans_200" onClick={ this.modifyPart }>
                        <p><i className="fas fa-edit"></i></p>
                    </div>
                    <div className="remove trans_200" onClick={ this.removePart }>
                        <p><i className="fas fa-times"></i></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return {} }
  
export default connect(mapStateToProps)(PanelBuildCard);
