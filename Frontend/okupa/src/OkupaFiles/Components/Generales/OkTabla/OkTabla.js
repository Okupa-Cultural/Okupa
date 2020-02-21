import React, { Component } from 'react';

//CSS
import './css/OkTabla.css';

export default class OkTabla extends Component {
    
    render() {
        return(
            <div className="t-contenedor">
                <table cellSpacing="0" cellPadding="0" className="table">
                    <thead>
                    <tr>
                        <th className="t-titulo" colSpan="2">
                            {this.props.Titulo}
                        </th>
                    </tr>
                        <tr>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fender Twin Reverb de 35w</td>
                            <td>
                                <div className="t-cantidad">
                                    <div>1</div>
                                    <i className="fal fa-minus-circle"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Micrófonos direccionales</td>
                            <td>
                                <div className="t-cantidad">
                                    <div>3</div>
                                    <i className="fal fa-minus-circle"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Sillas</td>
                            <td>
                                <div className="t-cantidad">
                                    <div>6</div>
                                    <i className="fal fa-minus-circle"></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="agregar">
                <i className="fal fa-plus-circle"></i>
                </div>

            </div>
        );
    }
}