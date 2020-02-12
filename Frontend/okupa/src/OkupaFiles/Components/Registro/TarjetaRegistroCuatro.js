import React, { Component } from 'react';
import FileInput from '../Generales/FileInput/FileInput';
import { Link } from 'react-router-dom';


export default class TarjetaRegistroCuatro extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(4 , formFormateado);
    };
    render() {
        return(
            <section className="abm-seccion" name="seccion4" id="seccion4">
                <div className="abm-seccion-cabecera">
                    <h1>Registro</h1>
                </div>
                <div className="abm-seccion-cuerpo">
                    <h2>Ya casi terminamos!</h2>
                    <h3>Cargá los elementos necesarios para tu puesta en escena. Es <b>opcional</b> pero muy <b>recomendable!</b></h3>
                    <form onSubmit={this.handleForm} action="">
                        <div className="elemento-temporal">Acá se cargan los elementos de escenario <br /> (っˆڡˆς)</div>
                        <div className="elemento-temporal">Acá se cargan los elementos de iluminación <br /> (｡◕‿‿◕｡)</div>
                        <br />
                        <h3>También podés cargar planos de tu puesta en escena!</h3>
                        
                        <FileInput valor="Plano de escenario" inputId="plano-escenario"/>
                        <FileInput valor="Plano de luces" inputId="plano-luces" />
                    </form>

                    <Link to="/feed">
                        <input type="submit" className="form-boton abm-boton" value="Finalizar"></input>
                    </Link>
                </div>
            </section>
        );
    }
}