import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import OkTabla from '../Generales/OkTabla/OkTabla';
import OkInput from '../Generales/OkInput/OkInput';
import OkRegistro from '../Generales/OkTabla/OkRegistro';

export default class TarjetaRegistroCuatro extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(5 , formFormateado);
    };
    render() {
        return(
            <section className="abm-seccion">
                <form className="tarjetas-registro-abm-form" onSubmit={this.handleForm} action="">
                    <h2>¡Ya casi terminamos!</h2>
                    <h3>
                        - Completa la lista de elementos para tu puesta en escena -
                        <br />
                        <b>Es opcional pero muy recomendable</b>
                    </h3>
                    
                    <OkTabla Titulo="Elementos de escenario">
                        <OkRegistro Cantidad="1" Descripcion="Esto es un test" />
                        <OkRegistro Cantidad="2" Descripcion="Esto es un test" />
                        <OkRegistro Cantidad="5" Descripcion="Esto es un test" />
                        <OkRegistro Cantidad="10" Descripcion="Esto es un test" />
                    </OkTabla>

                    <OkTabla Titulo="Elementos de iluminacion">
                        <OkRegistro Cantidad="100" Descripcion="Me siento feliz" />
                        <OkRegistro Cantidad="1000" Descripcion="De estar aprendiendo a hacer" />
                        <OkRegistro Cantidad="100000" Descripcion="Componentes complejos" />
                        <OkRegistro Cantidad="1000000" Descripcion="En React :D" />
                    </OkTabla>
                    
                    <OkInput Type="file" Icon="upload" Placeholder="Subí tu plano de escenario" Name="escenario" />
                    <OkInput Type="file" Icon="upload" Placeholder="Subí tu plano de luces" Name="luces" />

                    <Link to="/feed">
                        <OkInput Type="submit" Value="Finalizar" />
                    </Link>
                </form>
            </section>
        );
    }
}