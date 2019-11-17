import React, { Component } from 'react';

//CSS
import './css/Galeria.css';

//Componentes

export default class Galeria extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            imagenes: this.props.imagenes,
            imagenSeleccionada: '',
            fullscreenState: 2 //1: Active, 2: Inactive
        };
    }

    imageOnClick = (imagen) => {
        window.store.dispatch(window.setToFullscreenSelectedImage(imagen));
        window.store.dispatch(window.setFullscreenStatus(1));
        console.log(window.store.getState());
    }

    renderImagenes = (data, index) => {
        return <img key={Math.random()}
                    className="galeria-elemento" 
                    onClick={() => this.imageOnClick(data.urls.regular)} 
                    src={data.urls.small}
                    alt="imagen" 
                />;
    }

    render() {

        var GaleriaDeImagenes = this.state.imagenes.map(this.renderImagenes);

        return(
            <div className="galeria">
                <section className="cuerpo-galeria">
                    {GaleriaDeImagenes}
                </section>
            </div>
                 
        );
    }
}
