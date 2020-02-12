import React, { Component } from 'react';

//CSS
import './css/OkBoton.css';

export default class OkBoton extends Component {

    render() {
        return(
        <button className="boton" name={this.props.Name} id={this.props.Name}>{this.props.Value}</button>
        );
    }
}