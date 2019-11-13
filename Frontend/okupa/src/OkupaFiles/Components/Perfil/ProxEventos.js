import React, { Component } from 'react';

//CSS
import './css/ProxEventos.css'

export default class ProxEventos extends Component {

    render() {
        return(
            <section className="cuerpo-proxeventos">
                <div className="proxeventos-evento">
                    <div className="evento-datos">
                        <div className="datos-titulo">Variette del nacho con cheddar</div>
                        <div className="datos-fecha">25/10/2021</div>
                        <div className="datos-espacio">Zeugma Cultural, Haedo</div>
                    </div>
                    <button className="icono-agendar">
                        <i className="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
                    </button>
                </div>
                <div className="proxeventos-evento">
                    <div className="evento-datos">
                        <div className="datos-titulo">Variette del nacho con cheddar</div>
                        <div className="datos-fecha">25/10/2021</div>
                        <div className="datos-espacio">Zeugma Cultural, Haedo</div>
                    </div>
                    <button className="icono-agendar">
                        <i className="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
                    </button>
                </div>
                <div className="proxeventos-evento">
                    <div className="evento-datos">
                        <div className="datos-titulo">Variette del nacho con cheddar</div>
                        <div className="datos-fecha">25/10/2021</div>
                        <div className="datos-espacio">Zeugma Cultural, Haedo</div>
                    </div>
                    <button className="icono-agendar">
                        <i className="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
                    </button>
                </div>
                <div className="proxeventos-evento">
                    <div className="evento-datos">
                        <div className="datos-titulo">Variette del nacho con cheddar</div>
                        <div className="datos-fecha">25/10/2021</div>
                        <div className="datos-espacio">Zeugma Cultural, Haedo</div>
                    </div>
                    <button className="icono-agendar">
                        <i className="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
                    </button>
                </div>

            </section>
        );
    }
}