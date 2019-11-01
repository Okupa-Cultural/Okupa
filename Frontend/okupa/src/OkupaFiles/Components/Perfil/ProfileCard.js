import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/ProfileCard.css';

//Componentes
import ProfileEtiquetas from './ProfileEtiquetas';
import ProfileEstadisticas from './ProfileEstadisticas';
import ProfileAvatar from './ProfileAvatar';
import ProfileBanner from './ProfileBanner';
//


export default class ProfileCard extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="tarjeta-perfil">
              
                <ProfileBanner banner="https://www.hotelprovidence.com/resourcefiles/mainimages/providence-theater-dinner-package-of-hotel-providence-top.jpg"/>

              { /* Avatar del perfil  */}
                
                <ProfileAvatar />

                {/*==========Datos de Cabecera==========*/}

                <div className="cabecera">
                <h2 className="nombre-de-usuario">Los Hijos de la Rossi</h2>
                
                {/* Seguidores y presentaciones del usuario */ }

                <ProfileEstadisticas seguidores="600" presentaciones="200" seguidos="100" />

                { /* Etiquetas del Usuario */ }
                <ProfileEtiquetas />

                <div className="perfil-botonera">
                    <Link to="">
                        <input type="submit" className="perfil-boton" value="INVITAR"/>
                    </Link>
                    <Link to="/registro">
                        <input type="submit" className="perfil-boton" value="SEGUIR"/>
                    </Link>
                </div>

            </div>
        </div>
        );
    }
}