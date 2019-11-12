import React, { Component } from 'react';

//CSS
import './css/Galeria.css'

export default class Galeria extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="cuerpo-galeria">
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
                <div className="galeria-elemento"></div>
            </section>
                 
        );
    }
}
