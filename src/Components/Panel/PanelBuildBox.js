import React, { Component } from 'react';
import { connect } from "react-redux";

class PanelBuildBox extends Component {

    returnItem = () => {
        this.props.addPart( this.props.part )
        this.props.dispatch({ type: "PART_EMPTY"})
    }

    update = (event) => {
        this.props.dispatch({ type: "PART_CHANGE_VALUE", payload: { name: event.target.name, value: event.target.value}})
    }

    render() {
        return (
            <div className="build_box">
                <div className="add_container">
                    <div className="close" onClick={ this.props.toggleMenu }>
                        <i className="fas fa-times"></i>
                    </div>
                    <h2>Add item information</h2>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="title" 
                            type="text" 
                            onChange={e => this.update(e)}
                            value={ this.props.part.title }
                        />
                        <label className={ this.props.part.title ? "active" : ""}>Title</label>
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="info" 
                            type="text" 
                            onChange={e => this.update(e)}
                            value={ this.props.part.info }
                        />
                        <label className={ this.props.part.info ? "active" : ""}>Info</label>
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="price" 
                            type="number" 
                            onChange={e => this.update(e)}
                            value={ this.props.part.price }
                        />
                        <label className={ this.props.part.price ? "active" : ""}>Price</label>
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="link" 
                            type="text" 
                            onChange={e => this.update(e)}
                            value={ this.props.part.link }
                        />
                        <label className={ this.props.part.link ? "active" : ""}>Info</label>
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="icon" 
                            type="text" 
                            onChange={e => this.update(e)}
                            value={ this.props.part.icon }
                        />
                        <label className={ this.props.part.icon ? "active" : ""}>Icon URL</label>
                    </div>

                    <a  
                        className="waves-effect waves-light btn-large light-blue darken-1" 
                        onClick={ this.returnItem }>
                        Add item 
                    </a>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { part: state.part.item } 
}
  
export default connect(mapStateToProps)(PanelBuildBox);
