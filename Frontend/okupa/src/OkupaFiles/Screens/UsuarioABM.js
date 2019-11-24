import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components
import InputFile from './../Components/Generales/InputFile/InputFile';
//CSS
import './css/EstilosGenerales.css';
import './css/abm.css'

export default class UsuarioABM extends Component {

    render() {

      return (
        <div className="usuario-abm abm">
          <h1 className="abm-titulo">Registro</h1>
          <section className="abm-seccion" name="seccion1" id="seccion1">
            <h2>Bienvenidx a OKUPA!</h2>
            <label>Elije tu nombre de usuario</label>
            <input type="text" name="username" id="username" className="abm-input" autocomplete="off" autocapitalize="none" tabindex="1" placeholder="El nombre con el que ingresarás a Okupa" />
            
            <label>Ingresa tu email</label>
            <input type="email" name="email" id="email" className="abm-input" autocomplete="off" tabindex="2" placeholder="Para recibir información y que podamos validar tu cuenta" />

            <label>Elige una contraseña</label>
            <input type="password" name="password" id="password" className="abm-input" autocomplete="off" tabindex="3" placeholder="Que sea lo más segura posible! :o" />
          
            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>

          <section className="abm-seccion" name="seccion2" id="seccion2">
            <h2>Hablanos de vos...</h2>
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre" className="abm-input" autocomplete="off" tabindex="4" placeholder="Tu nombre o el de tu grupo" />

            <label>Fecha de inicio</label>
            <input type="date" name="fechaInicio" id="fechaInicio" className="abm-input input-fecha" autocomplete="off" tabindex="5" placeholder="El día en que tu o tu grupo comenzaron a presentar :')" />
            
            <label>Biografía</label>
            <textarea name="bio" id="bio" className="abm-textarea" autocomplete="off" tabindex="6" placeholder="Una descripción tuya...o de ustedes" />

            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>
          
          <section className="abm-seccion" name="seccion3" id="seccion3">
            <h2>Elije tus etiquetas!</h2>
            <h3>No escatimes! con ellas, otros espacios y artistas van a poder encontrarte más fácilmente</h3>
            
            <div className="elemento-temporal">Aca va el selector de etiquetas <br /> :D</div>

            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>

          <section className="abm-seccion" name="seccion4" id="seccion4">
            <h2>Ya casi terminamos!</h2>
            <h3>Indica la lista de elementos que necesitas para tu puesta en escena. Es <b>opcional</b>, pero altamente <b>recomendable!</b></h3>
            
            <label htmlFor="">Elementos de escenario</label>
            <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de escena <br /> :O</div>

            <label htmlFor="">Elementos de iluminación</label>
            <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de luces <br /> C|:=)</div>
            
            <label htmlFor="">Planos escénicos</label>

            <InputFile valor="Plano de escenario" inputId="plano-escenario"/>
            <InputFile valor="Plano de luces" inputId="plano-luces" />

            <button type="button" className="form-boton abm-boton">Finalizar</button>

          </section>

        </div>
      );
    }    
}