import React, { Component } from 'react';
import { connect } from "react-redux";
import Dropdown from 'react-dropdown';

class PanelBuildCurrency extends Component {

    state = {
        options: [
            { value: '$', label: <i className="fas fa-dollar-sign"></i> },
            { value: '€', label: <i className="fas fa-euro-sign"></i> },
            { value: '£', label: <i className="fas fa-pound-sign"></i> }
        ]
    }

    _onSelect = (event) => {
        this.props.dispatch({ type: "BUILD_CHANGE_VALUE", payload: { name: "currency", value: event.value } })
    }
    
    render() {
        return (
            <div className="dropdown">
                <Dropdown 
                    className="dropdown-trigger btn" 
                    options={this.state.options} 
                    onChange={this._onSelect} 
                    value={ this.props.currency } 
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { currency: state.build.currency } 
}
  
export default connect(mapStateToProps)(PanelBuildCurrency);
