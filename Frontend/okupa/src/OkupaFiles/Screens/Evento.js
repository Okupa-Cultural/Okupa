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
            <div className="evento mainScreen">
                <div className="post">
                    
                    <div className="foto">
                        <img 
                        src="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2019/11/15/wos_ph_guido_adler_.jpg"
                        alt="En vivo en Palacio de la Papa Frita"
                        title="En vivo en Palacio de la Papa Frita"
                        />
                    </div>
                    <div className="cuerpo">
                        <div className="evento-info">
                            <div className="evento-fecha">
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
                            <div className="evento-cabecera">
                                <div className="evento-nombre" title="En vivo en Palacio de la Papa Frita">
                                    En vivo en el Palacio de la Papa Frita
                                </div>
                                <Link to="/perfil">
                                    <div className="evento-direccion" title="PAlacio de la Papa Frita">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Palacio de la Papa Frita, CABA
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <PieEvento eventType="Espectáculo" Format="evento" />

                        <div className="participantes-contenedor">
                            <h2>Participantes</h2>
                            <div className="participantes">
                                <Link to="/perfil">
                                    <img src="https://www.filo.news/__export/1574200038049/sites/claro/img/2019/11/19/wos_agoto_otro_luna_park.jpg_423682103.jpg" 
                                    alt="Wos"
                                    title="Wos"
                                    />
                                    <h4>Wos</h4>
                                </Link>
                                <Link to="/perfil">
                                    <img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
                                    alt="Foo fighters"
                                    title="Foo fighters"
                                    />
                                    <h4>Red Hot Chili Peppers</h4>
                                </Link>
                                <Link to="/perfil">
                                    <img src="https://vignette.wikia.nocookie.net/grimadventures/images/1/19/Yogi_Bear.jpg/revision/latest/top-crop/width/360/height/450?cb=20171026023635" 
                                    alt="El oso Yogi"
                                    title="El oso Yogi"
                                    />
                                    <h4>El Oso Yogi</h4>
                                </Link>
                                <Link to="/perfil">
                                    <img src="https://i.ytimg.com/vi/GP_c7GyrTVU/hqdefault.jpg" 
                                    alt="Dibu"
                                    title="Dibu"
                                    />
                                    <h4>Dibu</h4>
                                </Link> 
                            </div>
                        </div>
                        
                        <div>
                            <h2>Descripción</h2>
                            <p className="evento-descripcion">
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