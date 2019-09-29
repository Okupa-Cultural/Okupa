import React, { Component } from 'react';
import './css/NavSearchBar.css';

export default class NavSearchBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.show) {
            return(
                <div className="nav-bar-search">
                    <input type="text" className="nav-bar-search-bar" placeholder="Buscar eventos..."></input>
                </div>
            );
        } else {
            return null;
        }
    }
}