import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "../../Assets/Inspect/InspectItemInterested.css"

export default class InspectItemInterested extends Component {
    render() {
        return(
            <div className="interested col s12">
                <div className="grading trans_200">
                    <div className="information">
                        <h4>Want to create your own build?</h4>
                        <p>More simple than ever before</p>
                        
                        <Link to="/"  
                            className="waves-effect waves-light btn-large light-blue darken-1" 
                            >Try out
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}