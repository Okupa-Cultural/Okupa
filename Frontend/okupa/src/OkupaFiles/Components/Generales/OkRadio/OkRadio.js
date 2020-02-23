import React, { Component } from 'react';

//CSS
import './css/OkRadio.css';

export default class OkRadio extends Component {

    render() {
        return(
            <label className="container">
                <input 
                type="radio"
                name={this.props.name}
                id={this.props.Id}
                />
                <span className="checkmark">
                </span>
            </label>
        );
    }
}