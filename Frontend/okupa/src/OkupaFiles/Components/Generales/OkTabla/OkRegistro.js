import React, { Component } from 'react';

//CSS
import './css/OkTabla.css';

export default class OkRegistro extends Component {

    render() {
        return(
            <tr>
                <td>
                    {this.props.Descripcion}
                </td>
                <td>
                    <div className="t-cantidad">
                        <div>{this.props.Cantidad}</div>
                        <i className="fal fa-minus-circle"></i>
                    </div>
                </td>
            </tr>
        );
    }
}