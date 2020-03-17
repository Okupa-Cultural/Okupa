import React, { Component } from 'react';

//CSS
import '../css/GaleriaEdit.css'

export default class GaleriaEdit extends Component {

    render() {
        return(
            <section className="enlaces-externos  config-seccion">
                <h2 className="seccion-titulo">Enlaces externos</h2>
                <form className="enlaces-contenedor">
                    <button formAction="https://instagram.com" formTarget="_blank">
                    <i className="fab fa-instagram"></i>
                    <span className="leyenda">Instagram</span>
                    </button>
                    <button formAction="https://soundcloud.com" formTarget="_blank">
                    <i className="fab fa-soundcloud"></i>
                    <span className="leyenda">Soundcloud</span>
                    </button>
                    <button formAction="https://Bandcamp.com" formTarget="_blank">
                    <i className="fab fa-bandcamp"></i>
                    <span className="leyenda">Bandcamp</span>
                    </button>
                    <button formAction="https://facebook.com" formTarget="_blank">
                    <i className="fab fa-facebook-square"></i>
                    <span className="leyenda">Facebook</span>
                    </button>
                    <button formAction="http://www.alternativateatral.com" formTarget="_blank">
                    <i className="fas fa-link"></i>
                    <span className="leyenda">Alternativa teatral</span>
                    </button>
                    <button formAction="https://twitter.com" formTarget="_blank">
                    <i className="fab fa-twitter"></i>
                    <span className="leyenda">Twitter</span>
                    </button>
                    
                </form>
            </section>
        );
    }
}