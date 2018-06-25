import React, { Component } from 'react';
import "../Assets/Footer.css";

export default class Footer extends Component {

    constructor() {
        super();
        this.state = { height: 180 };
        this.updateHeight = this.updateHeight.bind(this);
    }
    
    componentDidMount() {
        this.updateHeight();
        window.addEventListener("resize", this.updateHeight);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight);
    }
    
    componentDidUpdate() {
        this.updateHeight();
    }
    
    updateHeight() {
        if ( this.props.setHeight ) {
            if (this.state.height !== this.div.clientHeight ) {
                this.setState({ height: this.div.clientHeight })
                this.props.setHeight(this.state)
            }
        }
    }

    render() {
        return (
            <div ref={ div => { this.div = div; } } className="Footer">
                <h5>This website is <span><a>&lt;Coded /&gt;</a></span> with <span role="img" aria-label="heart">💖</span> in the night of the night</h5>
            </div>    
        );
    }
}