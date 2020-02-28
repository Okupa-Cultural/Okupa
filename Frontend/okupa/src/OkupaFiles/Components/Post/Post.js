import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Comentario from '../CasillaComentarios/Comentario';


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
            <div>
                <div className="post">
                    <Link to="/perfil">
                    <div className="usuario">
                        <img
                        src={this.props.userImg} 
                        alt={this.props.userName}
                        title={this.props.userName}
                        className="usuario-foto"
                        />
                        <h3 className="usuario-nombre" title={this.props.userName}>
                            {this.props.userName}
                        </h3>
                    </div>
                    </Link>
                    <div className="foto">
                        <div className="tipo-evento">
                            <span type={this.props.eventType} title={this.props.eventType}>
                                {this.props.eventType}
                            </span>
                        </div>    
                        <img 
                        src={this.props.eventImg} 
                        alt={this.props.eventName}
                        title={this.props.eventName}
                        />
                    </div>
                    <div className="cuerpo">
                        <div className="info">
                            <div className="fecha">
                                <div className="mes">
                                    {this.props.eventMonth}
                                </div>
                                <div className="dia">
                                    {this.props.eventDay}
                                </div>
                                <div className="hora">
                                    {this.props.eventHour}
                                </div>
                            </div>
                            <div className="cabecera">
                                <div className="nombre" title={this.props.eventName}>
                                    {this.props.eventName}
                                </div>
                                <div className="ubicacion">
                                    <div className="direccion" title={this.props.eventAdress}>
                                        <i className="fas fa-map-marker-alt"></i>
                                        {this.props.eventAdress}
                                    </div>
                                    <div className="cercania">
                                        a&nbsp;{this.props.distance}&nbsp;km de tu ubicación
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <p className="descripcion">
                            {this.props.eventDescrition}
                        </p>
                        </div>

                        <div className="divisor"></div>

                        <div className="estadisticas">
                            <i className="fad fa-user"></i>
                            {this.state.claps} aplausos
                            &nbsp; &nbsp;
                            <i className="fad fa-calendar-alt"></i>
                            veces agendado
                            &nbsp; &nbsp;
                            <i className="fad fa-comment-dots"></i>
                            comentarios
                        </div>
                    </div>
                    <div className="botonera">
                        <div 
                        onClick={() => this.touchedButton(1)} 
                        className={"post-boton " + this.displayButton(1)}
                        title="Aplaudir"
                        >
                            <i className="fal fa-sign-language"></i>
                        </div>
                        <div 
                        onClick={() => this.touchedButton(2)} 
                        className={"post-boton " + this.displayButton(2)}
                        title="Agendar"
                        >
                            <i className="fal fa-calendar-alt"></i>
                        </div>
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