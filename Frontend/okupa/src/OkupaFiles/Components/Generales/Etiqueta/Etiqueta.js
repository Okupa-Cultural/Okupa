import React, { Component } from 'react';

//CSS
import './css/Etiqueta.css';

export default class Etiqueta extends Component {

    render() {
        return(
            <div className="etiqueta">
                {this.props.Value}
                <div className="x">
                    <i className="fal fa-times"></i>
                </div>
            </div>
        );
    }
}