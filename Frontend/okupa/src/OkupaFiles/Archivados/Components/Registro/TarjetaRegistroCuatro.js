import React, { Component } from 'react';
import InputFile from '../Generales/InputFile/InputFile';
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
                <form className="tarjetas-registro-abm-form" onSubmit={this.handleForm} action="">
                    <h2>¡Ya casi terminamos!</h2>
                    <h3>Indica la lista de elementos que necesitas para tu puesta en escena. Es <b>opcional</b>, pero altamente <b>recomendable!</b></h3>
                    
                    <label htmlFor="">Elementos de escenario</label>
                    <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de escena <br /> :O</div>

                    <label htmlFor="">Elementos de iluminación</label>
                    <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de luces <br /> C|:=)</div>
                    
                    <label htmlFor="">Planos escénicos</label>
                    <div className="tarjeta-registro-planos">
                        <InputFile valor="Plano de escenario" inputId="plano-escenario"/>
                        <InputFile valor="Plano de luces" inputId="plano-luces" />
                    </div>

                    <Link to="/feed">
                        <input type="submit" className="form-boton abm-boton" value="Finalizar"></input>
                    </Link>
                </form>
            </section>
        );
    }
}