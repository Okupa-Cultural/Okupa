import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
//CSS
import './css/Post.css';



export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name : 'hidanshira'
        }
    }

    render() {

        return (
        <div className="post-main">

            <div className="post-cabecera">
                <Link to="/perfil">
                    <img className="post-fotoperfil" src={this.props.image} />
                </Link>
                <Link to="/perfil">
                    <p className="post-usuario">{this.props.name}</p>
                </Link>
            </div>

            <div className="post-contenido">
                <img src={this.props.imagenContenido}>
                </img>
            </div>
        
            <div className="post-descripcion">
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Morbi egestas, leo eu interdum cursus, 
                    augue ligula faucibus est, quis consectetur 
                    lacus velit vitae metus. Proin vulputate 
                    feugiat con</p>
            </div>

            
            <div className="post-boton post-boton-like">
                <i className="far fa-sign-language"></i>
            </div>
            <div className="post-boton post-boton-agendar">
                <i className="far fa-calendar-alt"></i>
            </div>
            <div className="post-boton post-boton-comentar">
                <i className="far fa-comment-dots"></i>
            </div>

        </div>
      );
    }    
}