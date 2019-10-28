import React, { Component } from 'react';

//CSS
import './css/ToggleCheckbox.css';

export default class ToggleCheckbox extends Component {

    render() {

        return(

            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

        );
    }
}