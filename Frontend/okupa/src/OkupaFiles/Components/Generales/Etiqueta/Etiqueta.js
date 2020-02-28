import React, { Component } from 'react';

//CSS
import './css/Etiqueta.css';

export default class Etiqueta extends Component {

    render() {
        return(
            <div className="etiqueta" editable={this.props.Editable} format={this.props.Format}>
                {this.props.Value}
                <div className="x" editable={this.props.Editable}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
        );
    }
}