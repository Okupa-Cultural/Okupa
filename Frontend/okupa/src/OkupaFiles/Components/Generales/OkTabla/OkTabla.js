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
                        {this.props.children}
                    </tbody>
                </table>

                <div className="agregar">
                <i className="fal fa-plus-circle"></i>
                </div>

            </div>
        );
    }
}