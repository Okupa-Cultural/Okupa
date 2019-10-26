import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//Componentes
import TarjetaCabecera from './TarjetaCabecera';
import TarjetaCuerpo from './TarjetaCuerpo';
import TarjetaPie from './TarjetaPie';

//CSS
import './css/Tarjeta.css';



export default class Tarjeta extends Component {

    render() {

        return (
        <div className="tarjeta">

            <TarjetaCabecera />
                
            <TarjetaCuerpo />

            <TarjetaPie />  

        </div>
      );
    }    
}