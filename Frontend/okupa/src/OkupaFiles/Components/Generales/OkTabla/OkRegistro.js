import React, { Component } from 'react';

//Componentes externos
import TextareaAutosize from 'react-textarea-autosize';

//CSS
import './css/OkTabla.css';

export default class OkRegistro extends Component {

    render() {
        return(
            <tr>
                <td className="t-descripcion">
                    <TextareaAutosize maxRows={6} />
                </td>
                <td className="t-cantidad-contenedor" htmlFor="cantidad">
                    <label className="t-cantidad" htmlFor="cantidad">
                        <input type="number" id="cantidad" />
                        <button type="button" className="remover" onClick={this.props.onRemove}>
                            <i className="fal fa-minus-circle"></i>
                        </button>
                    </label>
                </td>
            </tr>
        );
    }
}