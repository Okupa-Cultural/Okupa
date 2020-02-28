import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/Articulo.css';
import OkBoton from '../../Generales/OkBoton/OkBoton';

export default class Articulo extends Component {

    render() {
        return(
            <div className="articulo">
                <Link to="/evento">
                    <div className="art-foto">
                        
                        <img 
                        src={this.props.eventImg} 
                        alt={this.props.eventName}
                        title={this.props.eventName}
                        />
                    </div>
                </Link>
                <Link to="/evento">
                <div className="art-cuerpo">
                    <div className="art-info">
                        <div className="art-cabecera">
                            <div className="art-nombre" title={this.props.erticleName}>
                                {this.props.eventName}
                            </div>
                            <div className="art-ubicacion">
                                <div className="art-direccion" title={this.props.eventAdress}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    {this.props.eventAdress}
                                </div>
                                <div className="art-zona">
                                    {this.props.eventZone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>

                <div className="art-divisor"></div>

                <div className="art-pie" >   
                    <button className="art-boton" title="Agendar">
                    <   i className="fal fa-calendar-alt"></i>
                    </button>
                </div>

            </div>
        );
    }
}