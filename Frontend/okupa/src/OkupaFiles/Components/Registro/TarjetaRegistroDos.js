import React, { Component } from 'react';


export default class TarjetaRegistroDos extends Component {

    render() {
        return(
            <section className="abm-seccion" name="seccion2" id="seccion2">
                {/* <form action=""> */}
                    <h2>Hablanos de vos...</h2>
                    <label>Nombre</label>
                    <input type="text" name="nombre" id="nombre" className="abm-input" autoComplete="off" tabIndex="4" placeholder="Tu nombre o el de tu grupo" />
        
                    <label>Fecha de inicio</label>
                    <input type="date" name="fechaInicio" id="fechaInicio" className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="El día en que tu o tu grupo comenzaron a presentar :')" />
                    
                    <label>Biografía</label>
                    <textarea name="bio" id="bio" className="abm-textarea" autoComplete="off" tabIndex="6" placeholder="Una descripción tuya...o de ustedes" />
        
                    <button type="button" onClick={() => this.props.callback(2)} className="form-boton abm-boton">Siguiente</button>
                {/* </form> */ }
            </section>
        );
    }
}