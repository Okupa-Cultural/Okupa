import React, { Component } from 'react';

//Componentes
import OkInput from '../../Generales/OkInput/OkInput';
import OkBoton from '../../Generales/OkBoton/OkBoton';

//CSS
import '../css/EnlacesExternosEdit.css'

export default class EnlacesExternosEdit extends Component {

    constructor (props){
        super(props);
        this.state = {
            hiddenScreen: 1,
        };
    }

    revealHiddenScreen = () => {
        document.getElementById('paginaOculta').className = 'pagina-revelada';
        this.setState({hiddenScreen: 0});
    }

    hideHiddenScreen = () => {
        document.getElementById('paginaOculta').className = 'pagina-oculta';
        this.setState({hiddenScreen: 1});
    }

    render() {
        return(
            <section className="enlaces-externos config-seccion">
                <h2 className="seccion-titulo sin-margen">Enlaces externos</h2>
                <form className="enlaces-contenedor">
                    <button type="button" className="nuevo-enlace" onClick={this.revealHiddenScreen}>
                        <i className="fal fa-plus-circle"></i>
                        <span className="leyenda">Añadir un nuevo enlace</span>
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

                <div className="pagina-oculta" id="paginaOculta">
                    <div className="pagina-oculta-fondo" onClick={this.hideHiddenScreen}>
                    </div>
                    <div className="enlace-abm">
                        <button className="cerrar" onClick={this.hideHiddenScreen}>
                            <i className="fal fa-times"></i>
                        </button>
                        <h3>
                        Nuevo enlace
                        </h3>
                        <div className="enlace-abm-input">
                            <OkInput Type="text" Placeholder="URL" />
                            <div className="selector-icono">
                                <h4>Icono</h4>
                                <div className="iconos-contenedor">
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                    <div className="icono">
                                        <i class="fal fa-mug-hot"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <OkBoton Value="Guardar" />

                    </div>
                </div>

            </section>
        );
    }
}