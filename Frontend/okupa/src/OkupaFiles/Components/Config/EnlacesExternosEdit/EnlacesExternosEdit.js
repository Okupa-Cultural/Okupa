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
                <form className="enlaces-contenedor">
                    <button type="button" className="nuevo-enlace" onClick={this.revealHiddenScreen}>
                        <i className="fal fa-plus-circle"></i>
                        <span className="leyenda">Añadir enlace</span>
                    </button>
                    <button className="enlace-edit" type="button">
                        <i className="fal fa-times remover"></i>
                        <i className="fab fa-soundcloud"></i>
                        <span className="leyenda">Soundcloud</span>
                    </button>
                    <button type="button">
                        <i className="fal fa-times remover"></i>
                        <i className="fab fa-bandcamp"></i>
                        <span className="leyenda">Bandcamp</span>
                    </button>
                    <button type="button">
                        <i className="fal fa-times remover"></i>
                        <i className="fab fa-facebook-square"></i>
                        <span className="leyenda">Facebook</span>
                    </button>
                    <button type="button">
                        <i className="fal fa-times remover"></i>
                        <i className="fas fa-link"></i>
                        <span className="leyenda">Alternativa teatral</span>
                    </button>
                    <button type="button">
                        <i className="fal fa-times remover"></i>
                        <i className="fab fa-twitter"></i>
                        <span className="leyenda">Twitter</span>
                    </button>
                </form>

                <div className="pagina-oculta" id="paginaOculta">
                    <div className="pagina-oculta-fondo" onClick={this.hideHiddenScreen}>
                    </div>
                    <form className="abm-oculto">
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
                                    <div class="inner-block">
                                        <input id="fb" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="fb" className="icono">
                                            <i className="fab fa-facebook-square"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="tw" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="tw" className="icono">
                                            <i class="fab fa-twitter"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="yt" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="yt" className="icono">
                                            <i class="fab fa-youtube"></i>
                                        </label>
                                    </div>
                                    
                                    <div class="inner-block">
                                        <input id="g+" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="g+" className="icono">
                                            <i class="fab fa-google-plus-g"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="ig" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="ig" className="icono">
                                            <i class="fab fa-instagram"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="tc" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="tc" className="icono">
                                            <i class="fab fa-twitch"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="sc" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="sc" className="icono">
                                            <i class="fab fa-soundcloud"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="bc" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="bc" className="icono">
                                            <i class="fab fa-bandcamp"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="da" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="da" className="icono">
                                            <i class="fab fa-deviantart"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="rd" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="rd" className="icono">
                                            <i class="fab fa-reddit"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="bg" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="bg" className="icono">
                                            <i class="fab fa-blogger"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="li" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="li" className="icono">
                                            <i class="fab fa-linkedin"></i>
                                        </label>
                                    </div>

                                    <div class="inner-block">
                                        <input id="otros" className="radio-icono" name="radio-group" type="radio" />
                                        <label htmlFor="otros" className="icono">
                                            <i class="fas fa-link"></i>
                                        </label>
                                        <span className="leyenda">Otros</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <OkBoton Value="Guardar" />

                    </form>
                </div>

            </section>
        );
    }
}