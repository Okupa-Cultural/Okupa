import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import PieEvento from '../../PieEvento/PieEvento';

//CSS
import './css/ProxEvento.css';

export default class ProxEvento extends Component {

    render() {
        return(
            <div className="proximoEvento">
                <Link to="/evento">
                    <div className="pe-foto">
                        
                        <img 
                        src={this.props.eventImg} 
                        alt={this.props.eventName}
                        title={this.props.eventName}
                        />
                    </div>
                </Link>
                <Link to="/evento">
                <div className="pe-cuerpo">
                    <div className="pe-info">
                        <div className="pe-fecha">
                            <div className="pe-mes">
                                {this.props.eventMonth}
                            </div>
                            <div className="pe-dia">
                                {this.props.eventDay}
                            </div>
                            <div className="pe-hora">
                                {this.props.eventHour}
                            </div>
                        </div>
                        <div className="pe-cabecera">
                            <div className="pe-nombre" title={this.props.eventName}>
                                {this.props.eventName}
                            </div>
                            <div className="pe-ubicacion">
                                <div className="pe-direccion" title={this.props.eventAdress}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    {this.props.eventAdress}
                                </div>
                                <div className="pe-zona">
                                    {this.props.eventZone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>

                <div className="pe-divisor"></div>

                <PieEvento eventType={this.props.eventType} />

            </div>
        );
    }
}