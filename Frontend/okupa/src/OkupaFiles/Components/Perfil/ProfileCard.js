import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/ProfileCard.css';

//Componentes
import ProfileEtiquetas from './ProfileEtiquetas';
import ProfileSeguidores from './ProfileSeguidores';
import ProfileAvatar from './ProfileAvatar';
//


export default class ProfileCard extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="tarjeta-perfil">
              
              { /* Avatar del perfil  */}

              <ProfileAvatar />

                {/*==========Datos de Cabecera==========*/}

                <div className="cabecera">
                <h2 className="nombre-de-usuario">Los Hijos de la Rossi</h2>
                
                {/* Seguidores y presentaciones del usuario */ }

                <ProfileSeguidores seguidores="600" presentaciones="200" seguidos="100" />

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