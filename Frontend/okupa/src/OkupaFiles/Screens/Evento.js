import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Comentario from '../Components/CasillaComentarios/Comentario';
import PieEvento from '../Components/PieEvento/PieEvento';

//CSS
import './css/Evento.css';

export default class Evento extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name : 'hidanshira',
            clapTouched: false,
            scheduleTouched: false,
            claps: 0,
        }
    }

    touchedButton = (buttonType) => {
        switch(buttonType) {
            case 1: let estado = !this.state.clapTouched; 
                    let aplausos = this.state.claps;
                    if(estado) {
                        this.setState({claps : aplausos + 1});
                    } else {
                        this.setState({claps : aplausos - 1});
                    }
                    this.setState({
                        clapTouched: estado,
                    }); break;
            case 2: let estado2 = !this.state.scheduleTouched;
                this.setState({
                    scheduleTouched: estado2,
                 }); break;
            default: break;
        }
    };

    displayButton = (buttonType) => {
        if(buttonType === 1) {
            if(this.state.clapTouched) {
                return 'post-boton-likeActivo';
            } else {
                return 'post-boton-like';
            }
        } else {
            if(this.state.scheduleTouched) {
                return 'post-boton-agendarActivo';
            } else {
                return 'post-boton-agendar';
            }
        }
    };

    render() {
        return(
            <div>
                <div className="post">
                    <Link to="/perfil">
                    <div className="usuario">
                        <img
                        src="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/09/09/dady-brieva-kirchnerismo_0.jpg"
                        alt="Foto de perfil"
                        title="Wos Oficial"
                        className="usuario-foto"
                        />
                        <h3 className="usuario-nombre" title="Wos Oficial">
                            Wos Oficial
                        </h3>
                    </div>
                    </Link>
                    <div className="foto">
                        <img 
                        src="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2019/11/15/wos_ph_guido_adler_.jpg"
                        alt="En vivo en Palacio de la Papa Frita"
                        title="En vivo en Palacio de la Papa Frita"
                        />
                    </div>
                    <div className="cuerpo">
                        <div className="info">
                            <div className="fecha">
                                <div className="mes">
                                    ago
                                </div>
                                <div className="dia">
                                    27
                                </div>
                                <div className="hora">
                                    22:15
                                </div>
                            </div>
                            <div className="cabecera">
                                <div className="evento-nombre" title="En vivo en Palacio de la Papa Frita">
                                    En vivo en Palacio de la Papa Frita
                                </div>
                                <div className="ubicacion">
                                    <div className="direccion" title="PAlacio de la Papa Frita">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Palacio de la Papa Frita, CABA
                                    </div>
                                    <div className="cercania">
                                        a&nbsp;1.2&nbsp;km de tu ubicación
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <p className="descripcion">
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit.
                            <br /> 
                            Aperiam minima deserunt alias ad. 
                            Voluptatem porro vero laboriosam 
                            ipsum fugiat velit dicta dignissimos 
                            libero! Labore assumenda harum perferendis, 
                            ducimus adipisci tempora!
                            <br />
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit.
                            <br /> 
                            Aperiam minima deserunt alias ad. 
                            Voluptatem porro vero laboriosam 
                            ipsum fugiat velit dicta dignissimos 
                            libero! Labore assumenda harum perferendis, 
                            ducimus adipisci tempora!
                        </p>
                        </div>

                        <PieEvento eventType="Espectáculo" />

                    </div>
                    <div className="evento-botonera">
                        <div 
                        onClick={() => this.touchedButton(1)} 
                        className={"post-boton " + this.displayButton(1)}
                        title="Aplaudir"
                        >
                            <i className="fal fa-sign-language"></i>
                        </div>

                        <div className="separador-vertical"></div>

                        <div 
                        onClick={() => this.touchedButton(2)} 
                        className={"post-boton " + this.displayButton(2)}
                        title="Agendar"
                        >
                            <i className="fal fa-calendar-alt"></i>
                        </div>

                        <div className="separador-vertical"></div>

                        <div 
                        className="post-boton post-boton-comentar"
                        title="Comentar"
                        >
                            <i className="fal fa-comment-dots"></i>
                        </div>
                    </div>

                </div> {/*--Fin del post--*/}

                <div className="ultimo-comentario">
                    <Comentario username="Mauricio Macri" content="‍Qué es esta banda??? La puedo devaluar??? Besis! ❤️❤️" />
                </div>
                
            </div>
        );
    }
}