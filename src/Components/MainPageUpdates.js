import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MainPageUpdate from "./MainPageUpdate";

import "../Assets/MainPageUpdates.css";

export default class MainPageUpdates extends Component {

    state = {
        updates: [
            {
                timeStamp: "Sat Jun 23 2018 18:57:01 GMT+0300 (Eastern European Summer Time)",
                title: "1.0.0",
                changes: [
                    {
                        type: "+",
                        message: "dassdadasdasads"
                    },
                    {
                        type: "-",
                        message: "dassdadasdasads"
                    },
                    {
                        type: "-",
                        message: "dassdadasdasads"
                    },
                    {
                        type: "/",
                        message: "dassdadasdasads"
                    },
                    {
                        type: "+",
                        message: "dassdadasdasads"
                    }
                ]
            },
            {   
                timeStamp: "Sat Jun 23 2018 19:02:34 GMT+0300 (Eastern European Summer Time)",
                title: "Beta 0.97",
                changes: [
                    {
                        type: "+",
                        message: "Added updates"
                    },
                    {
                        type: "+",
                        message: "Added ability to create builds"
                    },
                    {
                        type: "-",
                        message: "Added first updates update, this"
                    },
                    {
                        type: "/",
                        message: "Code cleanup and stability testing"
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className="container updates">
                <div class="row">
                    <div className="col s10 offset-s1 m10 offset-m1">
                    <h4>Update Log</h4>
                    <div className="content">
                        {
                            this.state.updates.map(function(update) {
                                return( <MainPageUpdate update={update} /> )
                            })
                        }
                    </div>
                    </div>
                    <div className="button">
                        <Link to="/" activeClassName="" exact className="waves-effect waves-light btn-large light-blue darken-1">
                        Back to home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}