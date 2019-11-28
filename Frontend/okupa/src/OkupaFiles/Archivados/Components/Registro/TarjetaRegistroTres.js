import React, { Component } from 'react';


export default class TarjetaRegistroTres extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(3 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion3" id="seccion3">
                <form className="tarjetas-registro-abm-form" onSubmit={this.handleForm} action="">
                    <h2>Elije tus etiquetas!</h2>
                    <h3>No escatimes! con ellas, otros espacios y artistas van a poder encontrarte más fácilmente</h3>
                    
                    <div className="elemento-temporal">Aca va el selector de etiquetas <br /> :D</div>
        
                    <input type="submit" className="form-boton abm-boton" value="Siguiente"></input>
                </form>
            </section>
        );
    }
}