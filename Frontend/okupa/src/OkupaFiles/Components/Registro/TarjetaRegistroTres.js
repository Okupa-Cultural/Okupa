import React, { Component } from 'react';

//Componentes
import OkInput from '../Generales/OkInput/OkInput';
import OkTextarea from '../Generales/OkTextarea/OkTextarea';

export default class TarjetaRegistroDos extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(3 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion2" id="seccion2">
                <div className="abm-seccion-cuerpo">
                    <h2>Hablanos de tu proyecto</h2>
                    <form onSubmit={this.handleForm} action="">
                    <OkInput Type="text" Placeholder="Nombre del proyecto*" Name="name" TabIndex="1" />
                    <OkInput Type="date" Placeholder="Fecha de formación*" Name="name" TabIndex="1" />
                    <OkTextarea Placeholder="Biografía*" Name="bio" Rows="4" TabIndex="1" />
                    <OkInput Type="tel" Placeholder="Teléfono (opcional)" Name="phone" />
                    <OkInput Type="text" Placeholder="Dirección (opcional)" Name="adress" />
                    <OkInput Type="submit" Value="Continuar" />
                    </form>
                </div>
            </section>
        );
    }
}