import React, { Component } from 'react';

//Componentes
import OkBoton from '../Generales/OkBoton/OkBoton';

//CSS
import './css/PieEvento.css';

export default class PieEvento extends Component {

    render() {
        return(
            <div className="pie-evento" format={this.props.Format}>   
                <span type={this.props.eventType} title={this.props.eventType}>
                    {this.props.eventType}
                </span>

                <OkBoton Value="Confirmar asistencia" Format="small" />
                
                <div className="">
                    <button className="pe-boton-transparente" title="Agendar">
                        <i className="fas fa-share-alt"></i>
                    </button>
                    <button className="pe-boton" title="Agendar">
                        <i className="fal fa-calendar-alt"></i>
                    </button>
                </div>
            </div>
        );
    }
}