import React, { Component } from 'react';


export default class TarjetaRegistroUno extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(1 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion1" id="seccion1">
                    <div className="abm-seccion-cabecera">
                        <h1>Registro</h1>
                    </div>
                    <div className="abm-seccion-cuerpo">
                        <h2>Bienvenidx a OKUPA!</h2>
                        <form onSubmit={this.handleForm} action="">
                            <label htmlFor="">Elije tu nombre de usuario</label>
                            <input type="text" name="name" id="username" className="abm-input" autoComplete="off" autoCapitalize="none" tabIndex="1" required={false} placeholder="El nombre con el que ingresarás a Okupa" />

                            <label htmlFor="">Ingresa tu email</label>
                            <input type="email" name="mail" id="email" className="abm-input" autoComplete="off" tabIndex="2" required={false} placeholder="Para que podamos validar tu cuenta" />

                            <label htmlFor="">Elige una contraseña</label>
                            <input type="password" name="password" id="password" className="abm-input" autoComplete="off" tabIndex="3" required={false} placeholder="Que sea lo más segura posible! :o" />

                            <input type="submit" className="form-boton abm-boton" value="Siguiente"></input>
                        </form>
                    </div>
            </section>
        );
    }
}