import React, { Component } from 'react';

//Componentes
import OkCheckbox from '../../Generales/OkCheckbox/OkCheckbox';

//CSS
import './css/Semana.css';

export default class Semana extends Component {

    render() {
        return(
            <div className="semana">
                <label className="casillero" htmlFor="lunes">
                    <OkCheckbox Name="lunes" /> 
                    lunes
                </label>
                <label className="casillero" htmlFor="martes">
                    <OkCheckbox Name="martes" />
                    martes 
                </label>
                <label className="casillero" htmlFor="miercoles">
                    <OkCheckbox Name="miercoles" />
                    miércoles
                </label>
                <label className="casillero" htmlFor="jueves">
                    <OkCheckbox Name="jueves" />
                    jueves
                </label>
                <label className="casillero" htmlFor="viernes">
                    <OkCheckbox Name="viernes" />
                    viernes
                </label>
                <label className="casillero" htmlFor="sabado">
                    <OkCheckbox Name="sabado" />
                    sábado
                </label>
                <label className="casillero" htmlFor="domingo">
                    <OkCheckbox Name="domingo" />
                    domingo
                </label>
			</div>
        );
    }
}