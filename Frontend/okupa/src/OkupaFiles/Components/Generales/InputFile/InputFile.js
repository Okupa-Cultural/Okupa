import React, { Component } from 'react';

//CSS
import './css/InputFile.css';

export default class InputFile extends Component {

    render() {

        return(

            <div className="input-file-contenedor">
                <label for={this.props.inputId} className="input-file">
                    <i className="fas fa-arrow-alt-circle-up"></i> 
                    <span className="input-file-texto">
                        {this.props.valor}
                    </span>
                </label>
                <input type="file" name="planoEscenario" id={this.props.inputId} tabindex="9" />
            </div>


        );
    }
}