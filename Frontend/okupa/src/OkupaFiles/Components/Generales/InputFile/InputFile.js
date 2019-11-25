import React, { Component } from 'react';

//CSS
import './css/InputFile.css';

export default class InputFile extends Component {

    render() {

        return(

            <div className="input-file-contenedor">
                <label htmlFor={this.props.inputId} className="input-file">
                    <i className="fas fa-arrow-alt-circle-up"></i> 
                    <span className="input-file-texto">
                        {this.props.valor}
                    </span>
                </label>
                <input type="file" name={this.props.inputId} id={this.props.inputId} tabIndex="9" />
            </div>
        );
    }
}