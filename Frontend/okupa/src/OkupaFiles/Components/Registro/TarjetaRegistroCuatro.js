import React from 'react';
import InputFile from '../Generales/InputFile/InputFile';
import { Link } from 'react-router-dom';


export default function TarjetaRegistroCuatro() {
    return(
        <section className="abm-seccion" name="seccion4" id="seccion4">
             {/* <form action=""> */}
                <h2>¡Ya casi terminamos!</h2>
                <h3>Indica la lista de elementos que necesitas para tu puesta en escena. Es <b>opcional</b>, pero altamente <b>recomendable!</b></h3>
                
                <label htmlFor="">Elementos de escenario</label>
                <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de escena <br /> :O</div>

                <label htmlFor="">Elementos de iluminación</label>
                <div className="elemento-temporal">Acá va a estar la tabla para cargar el rider de luces <br /> C|:=)</div>
                
                <label htmlFor="">Planos escénicos</label>

                <InputFile valor="Plano de escenario" inputId="plano-escenario"/>
                <InputFile valor="Plano de luces" inputId="plano-luces" />

                <Link to="/feed">
                    <button type="button" className="form-boton abm-boton">Finalizar</button>
                </Link>
             {/* </form> */ }
        </section>
    );
}