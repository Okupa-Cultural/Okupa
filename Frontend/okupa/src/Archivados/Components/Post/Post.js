import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
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

        return (
        <div className="post-main">
            
            <div className="post-cabecera">
                <Link to="/perfil">
                    <img className="post-fotoperfil" src={this.props.image} alt="foto de perfil" />
                </Link>
                <Link to="/perfil">
                    <p className="post-usuario">{this.props.name}</p>
                </Link>
                <i className="fas fa-ellipsis-h post-menu-btn"></i>
            </div>

            <div className="post-contenido">
                <img src={this.props.imagenContenido} alt="post"/>
            </div>
        
            <div className="post-descripcion">
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Morbi egestas, leo eu interdum cursus, 
                    augue ligula faucibus est, quis consectetur 
                    lacus velit vitae metus. Proin vulputate 
                    feugiat con
                    <br/>
                    <br/>
                    {this.state.claps} Aplausos
                </p>
            </div>

            
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
      );
    }    
}