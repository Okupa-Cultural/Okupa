import React, { Component } from 'react';


export default class TarjetaRegistroDos extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(2 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion2" id="seccion2">
                <div className="abm-seccion-cabecera">
                    <h1>Registro</h1>
                </div>
                <div className="abm-seccion-cuerpo">
                    <h2>Hablanos de vos...</h2>
                    <form onSubmit={this.handleForm} action="">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="nombre" required={false} id="nombre" className="abm-input" autoComplete="off" tabIndex="4" placeholder="Tu nombre o el de tu grupo" />

                        <label htmlFor="">Fecha de inicio</label>
                        <input type="date" name="fechaInicio" id="fechaInicio" required={false} className="abm-input input-fecha" autoComplete="off" tabIndex="5" placeholder="El día en que tu o tu grupo comenzaron a presentar :')" />

                        <label htmlFor="">Biografia</label>
                        <textarea name="bio" id="bio" required={false} className="abm-textarea" autoComplete="off" tabIndex="6" placeholder="Una descripción tuya...o de ustedes" />

                        <input type="submit" className="form-boton abm-boton" value="Siguiente"></input>
                    </form>
                </div>
            </section>
        );
    }
}