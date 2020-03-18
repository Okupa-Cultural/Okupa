import React, { Component } from 'react';

//Componentes
import OkInput from '../OkInput/OkInput';
import OkBoton from '../OkBoton/OkBoton';
import Etiqueta from '../Etiqueta/Etiqueta';

//CSS
import './css/SelectorEtiquetas.css';

export default class SelectorEtiquetas extends Component {

    render() {
        return(
            <div className="slk-etiquetas">
                <OkInput Type="search" Placeholder="Buscá tus etiquetas" Name="tags" TabIndex="1" />
                <OkBoton Value="Etiquetas populares" Desplegable="1" />
                <div className="etiquetas-contenedor">
                    <label className="titulo">
                        Tus etiquetas
                    </label>
                    <div className="etiquetas">
                        <Etiqueta Value="Música" />
                        <Etiqueta Value="Teatro" />
                        <Etiqueta Value="Rock" />
                        <Etiqueta Value="Batería" />
                        <Etiqueta Value="Funk" />
                        <Etiqueta Value="Heavy metal" />
                    </div>
                </div>
            </div>    
        );
    }
}