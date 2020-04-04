import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/Comentario.css';

export default class Comentario extends Component {

    constructor(props){
        super(props);

        this.state = {
            fotoPerfil: 'https://bucket2.glanacion.com/anexos/fotos/53/3072253.jpg',
        };
    }

    render() {

        return(
            <div className="comentario">

                <img 
                src={this.state.fotoPerfil} 
                alt={this.props.username} 
                title={this.props.username} 
                className="comentarioFoto" />

                <div className="contenidoComentario">
                    <p>
                        <span>{this.props.username}</span>
                        :
                        &nbsp;&nbsp;
                        {this.props.content}
                    </p>

                </div>

                {/* 
                <div className="comentario">
                    <Link to="/perfil">
                        <div className="comentario-cabecera">
                            <div className="comentario-datos">
                                <div className="comentario-foto">
                                    <img src={this.state.fotoPerfil} alt={this.props.username} title={this.state.username} />
                                </div>
                                <div className="comentario-usuario">
                                    {this.props.username}
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <p className="comentario-texto">
                        {this.props.content}
                    </p>
                </div>
                
                */}
            </div>
        );
    }
}