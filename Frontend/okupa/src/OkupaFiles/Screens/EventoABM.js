import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components
import InputFile from './../Components/Generales/InputFile/InputFile';
import CheckBox from './../Components/Generales/CheckBox/CheckBox';
//CSS
import './css/EstilosGenerales.css';
import './css/EventoABM.css';
//import './css/abm.css'

export default class EventoABM extends Component {

    render() {

      return (
        <div className="evento-abm">
          <section className="evento-abm-tarjeta">
            <form action="">
              <input type="text" className="evento-nombre" placeholder="(Editar nombre del evento)" name="title" tabindex="1" />
              <input type="text" className="evento-subtitulo" placeholder="(Editar subtítulo)" name="subtitle" tabindex="1" />

              <fieldset>
                <legend>Horario</legend>
                    <div>
                      <label htmlFor="">Inicio</label>
                      <input type="datetime" name="start"  tabindex="1"/>
                    </div>
                    <div>
                      <label htmlFor="">Fin</label>
                      <input type="datetime-local" name="end"  tabindex="1"/>
                    </div>
              </fieldset>
              <fieldset>
                <legend>Período</legend>

                <div className="semana">
                  <CheckBox CheckID="lunes" />
                  <label htmlFor="lunes" className="dias" tabindex="1">Lunes</label>
                  
                  <CheckBox CheckID="martes" />
                  <label htmlFor="martes" className="dias" tabindex="1">Martes</label>
                  
                  <CheckBox CheckID="miercoles" />
                  <label htmlFor="miercoles" className="dias" tabindex="1">Miércoles</label>
                  
                  <CheckBox CheckID="jueves" />
                  <label htmlFor="jueves" className="dias" tabindex="1">Jueves</label>
                  
                  <CheckBox CheckID="viernes" />
                  <label htmlFor="viernes" className="dias" tabindex="1">Viernes</label>
                  
                  <CheckBox CheckID="sabado" />
                  <label htmlFor="sabado" className="dias" tabindex="1">Sábado</label>
                  
                  <CheckBox CheckID="domingo" /> 
                  <label htmlFor="domingo" className="dias" tabindex="1">Domingo</label>
                </div>
                <div className="repeticion">
                  <label htmlFor="">Cada</label>
                  <input type="number" defaultValue="1"  tabindex="1"/>
                  <select name="repeticion" id="repeticion" defaultValue="1" tabindex="1">
                    <option value="1">semanas</option>
                    <option value="2">meses</option>
                  </select>
                </div>
              </fieldset>
              <fieldset>
                <legend>Ubicación</legend>
                <button className="boton-invitar" tabindex="1">Contacta a un espacio</button>
                <input className="dir" type="text" placeholder="Dirección"  tabindex="1"/>
              </fieldset>
              <fieldset>
                <legend>Portada</legend>
                <label htmlFor="">Foto de portada</label>
                <InputFile valor="Subir foto" inputID="fotoPortada" tabindex="1"/>

                <label htmlFor="">Descripcion</label>
                <textarea name="" id="" cols="30" rows="5" tabindex="1"></textarea>
              </fieldset>
              <fieldset >
                <legend>Participantes</legend>
                <div className="participantes-vacio">
                  <p>Nadie presenta en este evento aún <i className="fas fa-sad-cry"></i></p>
                  <button className="boton-invitar" tabindex="1">INVITA PERSONAS PARA QUE PRESENTEN!</button>
                </div>
              </fieldset>
              
              <fieldset className="oculto">
                <input type="submit" className="form-boton abm-boton" value="Finalizar" tabindex="1"></input>
              </fieldset>
            </form>
          </section>

        </div>
      );
    }    
}