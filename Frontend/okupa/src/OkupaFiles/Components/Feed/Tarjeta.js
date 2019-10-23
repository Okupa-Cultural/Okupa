import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import TarjetaCuerpo from './TarjetaCuerpo';
import TarjetaPie from './TarjetaPie';

//CSS
import './css/Tarjeta.css';

export default class Tarjeta extends Component {

    render() {

        return (
        <div className="tarjeta">
                <div className="tarjeta-cabecera">
                    <Link to="/Perfil">
                        <div className="tarjeta-fotoperfil"></div>
                        <div className="tarjeta-datos">
                                <div className="tarjeta-nombre">Leandro Garcia Luzzi</div>
                                <div className="tarjeta-fechayhora">21/06/2020</div>

                        </div>
                    </Link>
                </div>
                
            <TarjetaCuerpo />

            <TarjetaPie />  

        </div>
      );
    }    
}