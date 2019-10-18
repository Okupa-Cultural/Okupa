import React, { Component } from 'react';

//CSS
import './css/ProfileCard.css';
import './css/ProfileGaleria.css';

//Componentes
import imagen1 from './img/imagen1.jpg';
import imagen2 from './img/imagen2.jpg';
import imagen3 from './img/imagen3.jpg';
import imagen4 from './img/imagen4.jpg';
import imagen5 from './img/imagen5.jpg';
import imagen6 from './img/imagen6.jpg';
import imagen7 from './img/imagen7.jpg';
import imagen8 from './img/imagen8.jpg';
import imagen9 from './img/imagen9.jpg';

export default class ProfileGaleria extends Component {

    render() {
        return(
            <div className="tarjeta-perfil">
            	<div className="galeria">
            		<img src={imagen1} alt="imagen1" className="imagen" />
                    <img src={imagen1} alt="imagen1" className="imagen" />
                    <img src={imagen1} alt="imagen1" className="imagen" />
                    <img src={imagen1} alt="imagen1" className="imagen" />
            		<img src={imagen2} alt="imagen2" className="imagen" />
            		<img src={imagen3} alt="imagen3" className="imagen" />
            		<img src={imagen4} alt="imagen4" className="imagen" />
            		<img src={imagen5} alt="imagen5" className="imagen" />
            		<img src={imagen6} alt="imagen6" className="imagen" />
            		<img src={imagen7} alt="imagen7" className="imagen" />
            		<img src={imagen8} alt="imagen8" className="imagen" />
            		<img src={imagen9} alt="imagen9" className="imagen" />
            	</div>
            </div>
        );
    }
}