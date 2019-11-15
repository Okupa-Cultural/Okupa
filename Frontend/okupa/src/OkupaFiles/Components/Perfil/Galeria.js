import React, { Component } from 'react';

//CSS
import './css/Galeria.css'

export default class Galeria extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            imagenes: this.props.imagenes
        };
    }

    renderImagenes = (data, index) => {
        return <img key={Math.random()}className="galeria-elemento" src={data.urls.small} />;
    }

    render() {

        var GaleriaDeImagenes = this.state.imagenes.map(this.renderImagenes);

        return(
            <section className="cuerpo-galeria">
                {GaleriaDeImagenes}
            </section>
                 
        );
    }
}
