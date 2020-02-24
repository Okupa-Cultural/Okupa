import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import OkInput from '../Generales/OkInput/OkInput';

export default class TarjetaRegistroUno extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(2 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion1" id="seccion1">
                    <div className="abm-seccion-cuerpo">
                        <h2>Comencemos</h2>
                        <form onSubmit={this.handleForm} action="">
                            <OkInput Type="Text" Placeholder="Nombre de usuario" Name="username" TabIndex="1" />
                            <OkInput Type="email" Placeholder="E-mail" Name="email" TabIndex="1" />
                            <OkInput Type="password" Placeholder="Contraseña" Name="password" TabIndex="1" />
                            <OkInput Type="submit"  Value="Continuar" TabIndex="1" />
                        </form>
                        <p className="tyc">
                            Si continuás, aceptás nuestras&nbsp;
                            <Link to=""><u>políticas de privacidad&nbsp;</u></Link>
                            y nuestros&nbsp; 
                            <Link to=""><u>términos de uso</u>.</Link>
                        </p>
                    </div>
            </section>
        );
    }
}