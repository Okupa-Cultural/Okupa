import React, { Component } from 'react';

//CSS
import './css/OkSelect.css';

export default class OkSelect extends Component {

    render() {
        return(
            <select name={this.props.Name} id={this.props.Id} className="select">
                {this.props.children}
            </select>
        );
    }
}