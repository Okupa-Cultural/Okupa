import React, { Component } from 'react';

//CSS
import './css/Galeria.css';

//Componentes
import FullScreenImage from './FullScreenImage';

export default class Galeria extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            imagenes: this.props.imagenes,
            imagenSeleccionada: '',
            fullScreenImageActive: 'fullscreen-image-background',
            fullScreenImageInactive: 'fullscreen-image-inactive',
            fullscreenState: 2 //1: Active, 2: Inactive
        };
    }

    imageOnClick = (imagen) => {
        this.setState({
            fullscreenState: 1,
            imagenSeleccionada: imagen
        });
    }

    renderImagenes = (data, index) => {
        return <img key={Math.random()}
                    className="galeria-elemento" 
                    onClick={() => this.imageOnClick(data.urls.regular)} 
                    src={data.urls.small}
                    alt="imagen" 
                />;
    }

    renderFullscreen = (origen) => {
        //Origen: 1 (Viene de Galeria, practicamente uso esto para usar la misma funcion
        //           en lugar de crear dos separadas, el valor 2 significa que viene del
        //           componente FullScreenImage)
        console.log(this.state.fullscreenState);
        if(origen === 1) {
            if(this.state.fullscreenState === 1) {
                return this.state.fullScreenImageActive;
            } else {
                return this.state.fullScreenImageInactive;
            }
        } else {
            this.setState({
                fullscreenState: 2
            })
        }
    }

    render() {

        var GaleriaDeImagenes = this.state.imagenes.map(this.renderImagenes);

        return(
            <div className="galeria">

                <FullScreenImage clase={this.renderFullscreen(1)} 
                                 imagen={this.state.imagenSeleccionada}
                                 callback={() => this.renderFullscreen(2)}
                />

                <section className="cuerpo-galeria">
                    {GaleriaDeImagenes}
                </section>
            </div>
                 
        );
    }
}
