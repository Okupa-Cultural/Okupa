import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/Articulo.css';
import OkBoton from '../../Generales/OkBoton/OkBoton';

export default class Articulo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            markedArticle: 0,
        };

        this.marcarArticulo = this.marcarArticulo.bind(this);
    }

    marcarArticulo() {
        if(!this.state.markedArticle){
            document.getElementById('favorito').className ='art-boton-transparente-Activo';
            this.setState({markedArticle: 1,});
        }else{
            document.getElementById('favorito').className ='art-boton-transparente';
            this.setState({markedArticle: 0,});
        }
    }

    render() {
        return(
            <div className="articulo">
                <div className="art-foto">
                    <img 
                    src={this.props.articleImg} 
                    alt={this.props.articleImg}
                    title={this.props.articleImg}
                    />
                </div>
                <div className="art-cuerpo">
                    <div className="art-info">

                        <div className="art-cabecera">
                            <h3 className="art-nombre" title={this.props.articleName}>
                                {this.props.articleName}
                            </h3>
                            <h4 className="art-subtitulo" title={this.props.articleSubtitle}>
                                {this.props.articleSubtitle}
                            </h4>
                        </div>

                        <div className="art-precio" title={this.props.articlePrice}>
                            ${this.props.articlePrice}
                        </div>

                    </div>
                </div>

                <div className="art-botonera" >
                    <button 
                    className="art-boton-transparente" 
                    title="Agendar" 
                    id="favorito"
                    onClick={this.marcarArticulo}>
                        <i class="fas fa-bookmark"></i>
                    </button>
                    <div>
                        <button className="art-boton-transparente" title="Agendar">
                            <i class="fas fa-share-alt"></i>
                        </button>
                        <button className="art-boton" title="Añadir al carrito">
                            <i class="fal fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}