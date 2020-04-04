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
                    <div className="comentarioFecha">
                        Hace 1 año
                    </div>
                </div>

            </div>
        );
    }
}