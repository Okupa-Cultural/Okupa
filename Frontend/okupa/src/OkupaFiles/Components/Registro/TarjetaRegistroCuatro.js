import React, { Component } from 'react';


export default class TarjetaRegistroTres extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(4 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion3" id="seccion3">
                <div className="abm-seccion-cabecera">
                        <h1>Registro</h1>
                </div>
                <div className="abm-seccion-cuerpo">
                    <h2>Elegí tus etiquetas!</h2>
                    <h3>Son para que espacios y artistas te puedan encontrar</h3>
                    <form onSubmit={this.handleForm} action="">
                        <div className="elemento-temporal">Aca va el selector de etiquetas <br /> :D</div>

                        <input type="submit" className="form-boton abm-boton" value="Siguiente"></input>
                    </form>
                </div>
            </section>
        );
    }
}