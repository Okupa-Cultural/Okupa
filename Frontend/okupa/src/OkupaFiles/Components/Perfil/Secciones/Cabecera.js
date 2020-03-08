import React, { Component } from 'react';

//Componentes
import Etiqueta from '../../Generales/Etiqueta/Etiqueta';
import OkBoton from '../../Generales/OkBoton/OkBoton';

//CSS
import './css/Cabecera.css';

export default class Cabecera extends Component {

    render() {
        return(
            <section className="p-cabecera">
                <h1 className="p-nombre">
                    {this.props.profileName}
                </h1>
                <div className="p-etiquetas">
                    <Etiqueta Value="Actuación" Editable="0" Format="small" />
                    <Etiqueta Value="Teatro" Editable="0" Format="small" />
                    <Etiqueta Value="Cine" Editable="0" Format="small" />
                    <Etiqueta Value="Música" Editable="0" Format="small" />
                    <Etiqueta Value="Tango" Editable="0" Format="small" />
                </div>
                <div className="p-estadisticas">
                <div className="estadisticas-elemento">
                    <span className="cantidad">150 K</span>
                    <span className="leyenda">
                    <i className="fad fa-users"></i>
                    &nbsp;
                    Seguidores
                    </span>
                </div>

                <div className="p-divisor"></div>

                <div className="estadisticas-elemento">
                    <span className="cantidad">6</span>
                    <span className="leyenda">
                    <i className="fad fa-hiking"></i>
                    &nbsp;
                    Seguidos
                    </span>
                </div>

                <div className="p-divisor"></div>

                <div className="estadisticas-elemento">
                    <span className="cantidad">960</span>
                    <span className="leyenda">
                    <i className="fad fa-calendar-alt"></i>
                    &nbsp;
                    Eventos
                    </span>
                </div>
                </div>

                <nav className="p-botonera">
                    <OkBoton Value="Seguir" />
                    <OkBoton Value="Invitar" />
                </nav>
            </section>
        );
    }
}