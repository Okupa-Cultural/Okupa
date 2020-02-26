import React, { Component } from 'react';

//CSS
import './css/Post.css';

export default class Post extends Component {

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
            <div className="post">
                <div className="usuario">
                    <img src="https://vignette.wikia.nocookie.net/doblaje/images/4/46/Nicolas_cage.jpg/revision/latest?cb=20190207035634&path-prefix=es" 
                    alt="Nicolas Cage"
                    className="usuario-foto"
                    />
                    <h3 className="usuario-nombre">
                        Centro cultural Nicolas Queish
                    </h3>
                </div>
                <div className="foto">
                    <div className="tipo-evento">
                        <span>Espectáctulo</span>
                    </div>    
                    <img 
                        src="https://lastfm.freetls.fastly.net/i/u/770x0/b1d30477a02f48c2c8a9bdc8515e0d59.jpg" 
                        alt="Kyuss - Live at Plaza Bomberitos"
                    />
                </div>
                <div className="cuerpo">
                    <div className="info">
                        <div className="fecha">
                            <div className="mes">
                                jun
                            </div>
                            <div className="dia">
                                06
                            </div>
                            <div className="hora">
                                21:30
                            </div>
                        </div>
                        <div className="cabecera">
                            <div className="nombre">
                                Kyuss - Live at Plaza Bomberitos
                            </div>
                            <div className="ubicacion">
                                <div className="direccion">
                                    <i className="fas fa-map-marker-alt"></i>
                                    Centro cultural Bomberitos
                                </div>
                                <div className="cercania">
                                    a 2,6 km de tu ubicación
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <p className="descripcion">
                        Lorem ipsum dolor sit, amet 
                        consectetur adipisicing elit. 
                        Porro, quis autem. Adipisci 
                        labore laborum dolore aut fugiat 
                        blanditiis corporis quasi accusamus, 
                        totam commodi sunt velit in dolor 
                        quos cupiditate obcaecati!
                    </p>
                    </div>
                    <div className="estadisticas">
                        {this.state.claps} aplausos
                    </div>
                </div>
                <div className="botonera">
                    <div onClick={() => this.touchedButton(1)} className={"post-boton " + this.displayButton(1)}>
                        <i className="far fa-sign-language"></i>
                    </div>
                    <div onClick={() => this.touchedButton(2)} className={"post-boton " + this.displayButton(2)}>
                        <i className="far fa-calendar-alt"></i>
                    </div>
                    <div className="post-boton post-boton-comentar">
                        <i className="far fa-comment-dots"></i>
                    </div>
                </div>
            </div>
        );
    }
}