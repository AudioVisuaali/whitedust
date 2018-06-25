import React, { Component } from 'react';
import { connect } from "react-redux";

class PanelBuildImage extends Component {
    
    componentDidMount() {
        this.setState({
            pictureURL: this.props.picture
        })
    }

    state = { pictureURL: "" }

    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    updateLink = () => {
        this.props.dispatch({ type: "BUILD_CHANGE_VALUE", payload: { name: "picture", value: this.state.pictureURL }})
        this.props.toggleMenu()
    }

    render() {
        return (
            <div className="build_box">
                <div className="add_container">
                    <div className="close" onClick={ this.props.toggleMenu }>
                        <i className="fas fa-times"></i>
                    </div>
                    <h2>Change picture url</h2>
                    <div className="input-field">
                        <input 
                            placeholder="" 
                            name="pictureURL" 
                            type="text" 
                            onChange={e => this.update(e)}
                            value={ this.state.pictureURL }
                        />
                        <label className={ this.state.pictureURL ? "active" : ""}>Url</label>
                    </div>

                    <a  
                        className="waves-effect waves-light btn-large light-blue darken-1" 
                        onClick={ this.updateLink }>
                        Apply 
                    </a>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { picture: state.build.picture } 
}
  
export default connect(mapStateToProps)(PanelBuildImage);
