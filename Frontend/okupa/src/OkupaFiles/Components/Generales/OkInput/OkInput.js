import React, { Component } from 'react';

//CSS
import './css/OkInput.css';

export default class OkInput extends Component {

    render() {
        return(
            <input type={this.props.Type} placeholder={this.props.Placeholder} name={this.props.Name} id={this.props.Name} className="inputText" />
        );
    }
}