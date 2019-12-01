import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components
//import InputFile from './../Components/Generales/InputFile/InputFile';
import InputFile from './../Components/Generales/InputFile/InputFile';

//CSS
import './css/EstilosGenerales.css';
//import './css/abm.css'

export default class EventoABM extends Component {

    render() {

      return (
        <div className="abm evento-abm">
          <div className="contenedor-tarjetas ct-evento">
            <seccion className="abm-seccion">
              <div className="abm-seccion-cabecera">
                <h1>Nuevo evento</h1>
              </div>
              <div className="abm-seccion-cuerpo">
                <form onSubmit={this.handleForm} action="">
                  <label htmlFor="">Nombre del evento</label>
                  <input type="text" name="title" id="nombreEvento" className="abm-input" autoComplete="off" autoCapitalize="none" tabIndex="1" required={true} />

                  <div className="evento-abm-fechas">
                      <div className="fecha-elemento">
                        <label htmlFor="">Fecha de inicio</label>
                        <br />
                        <input type="date" name="fechaInicio" id="fechaInicio" required={true} className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="Fecha de inicio" />
                      </div>
                      <div className="fecha-elemento">
                        <label htmlFor="">Fecha de finalización</label>
                        <br />
                        <input type="date" name="fechaInicio" id="fechaInicio" required={true} className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="Fecha de inicio" />
                      </div>
                  </div>

                  
                  <div className="evento-abm-horario">
                      <label htmlFor="" className="evento-abm-titulo">Horario</label>
                      <div className="horario-elemento">
                        <label htmlFor="">Inicio</label>
                        <br />
                        <input type="time" name="fechaInicio" id="fechaInicio" required={true} className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="Fecha de inicio" />
                      </div>
                      <div className="fecha-elemento">
                        <label htmlFor="">Fin</label>
                        <br />
                        <input type="time" name="fechaInicio" id="fechaInicio" required={true} className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="Fecha de inicio" />
                      </div>
                  </div>

                  <div className="evento-abm-dias">
                      <label htmlFor="" className="evento-abm-titulo">Frecuencia</label>
                      <label htmlFor="">
                          <input type="checkbox" value="lunes" name="lunes" id="lunes" />
                          Lunes
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="martes" name="martes" id="martes" />
                          Martes
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="miercoles" name="miercoles" id="miercoles" />
                          Miércoles
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="jueves" name="jueves" id="jueves" />
                          Jueves
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="viernes" name="viernes" id="viernes" />                      
                          Viernes
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="sabado" name="sabado" id="sabado" />
                          Sábado
                      </label>
                      <label htmlFor="">
                          <input type="checkbox" value="domingo" name="domingo" id="domingo" />
                          Domingo
                      </label>
                  </div>

                  <InputFile valor="Foto de portada" inputId="plano-escenario"/>

                  <input type="submit" className="form-boton abm-boton" value="Finalizar"></input>
                </form>
              </div>
            </seccion>
          </div>
        </div>
      );
    }    
}