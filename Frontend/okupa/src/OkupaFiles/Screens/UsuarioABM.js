import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components
//CSS
import './css/EstilosGenerales.css';
import './css/abm.css'

export default class UsuarioABM extends Component {

    render() {

      return (
        <div className="usuario-abm">
          <section className="login-seccion" name="seccion1" id="seccion1">
            <h2>Bienvenidx a OKUPA!</h2>
            <label>Elije tu nombre de usuario</label>
            <input type="text" name="username" id="username" className="abm-input" autocomplete="off" placeholder="El nombre con el que ingresarás a Okupa" />
            
            <label>Ingresa tu email</label>
            <input type="email" name="email" id="email" className="abm-input" autocomplete="off" placeholder="Para recibir información y que podamos validar tu cuenta" />

            <label>Elige una contraseña</label>
            <input type="password" name="password" id="password" className="abm-input" autocomplete="off" placeholder="Que sea lo más segura posible! :o" />
          
            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>

          <section className="login-seccion" name="seccion2" id="seccion2">
            <h2>Hablanos de vos...</h2>
            <label>Nombre</label>
            <input type="text" name="nombre" id="nombre" className="abm-input" autocomplete="off" placeholder="Tu nombre o el de tu grupo" />

            <label>Fecha de inicio</label>
            <input type="date" name="fechaInicio" id="fechaInicio" className="abm-input" autocomplete="off" placeholder="El día en que tu o tu grupo comenzaron a presentar :')" />
            
            <label>Biografía</label>
            <textarea name="bio" id="bio" className="abm-textarea" autocomplete="off" placeholder="Una descripción vos...o ustedes" />

            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>
          
          <section className="login-seccion" name="seccion3" id="seccion3">
            <h2>Elije tus etiquetas!</h2>
            <h3>No escatimes! con ellas, los espacios u otrxs artistas van a poder encontrarte más fácilmente</h3>
            <div>Aca va el selector de etiquetas :D</div>

            <label>Biografía</label>

            <button type="button" className="form-boton abm-boton">Siguiente</button>
          </section>

          <section className="login-seccion" name="seccion4" id="seccion4">
            <h2>Ya casi terminamos!</h2>
            <h3>Indica la lista de elementos que necesitas para tu puesta en escena. Es <b>opcional</b>, pero altamente <b>recomendable!</b></h3>
            
            <label htmlFor="">Elementos de escenario</label>
            <div>Acá va a estar la tabla para cargar el rider de escena</div>

            <label htmlFor="">Elementos de iluminación</label>
            <div>Acá va a estar la tabla para cargar el rider de luces</div>
            
            <div className="input-file-contenedor">
              <label htmlFor="">Plano de escenario</label>
              <input type="file" className="login-input-file" name="planoEscenario" id="planoEscenario" />
              
              <label htmlFor="">Plano de luces</label>
              <input type="file" className="login-input-file" name="planoLuces" id="planoLuces" />
            </div>

            <button type="button" className="form-boton abm-boton">Finalizar</button>
          </section>

          <section className="login-seccion" name="seccion4" id="seccion4">
          <h2>Todo listo!</h2>
          <h3>Gracias por unirte a OKUPA. Esperamos que tengas una agradable experiencia</h3>
            
          </section>
        </div>
      );
    }    
}