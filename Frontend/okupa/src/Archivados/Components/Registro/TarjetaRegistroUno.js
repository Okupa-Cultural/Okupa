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
                <form className="tarjetas-registro-abm-form" onSubmit={this.handleForm} action="">
                    <h2>Bienvenidx a OKUPA!</h2>
                    <label>Elije tu nombre de usuario</label>
                    <input type="text" name="name" id="username" className="abm-input" autoComplete="off" autoCapitalize="none" tabIndex="1" required={true} placeholder="El nombre con el que ingresarás a Okupa" />
                    
                    <label>Ingresa tu email</label>
                    <input type="email" name="mail" id="email" className="abm-input" autoComplete="off" tabIndex="2" required={true} placeholder="Para que podamos validar tu cuenta" />
        
                    <label>Elige una contraseña</label>
                    <input type="password" name="password" id="password" className="abm-input" autoComplete="off" tabIndex="3" required={true} placeholder="Que sea lo más segura posible! :o" />
                
                    <input type="submit" className="form-boton abm-boton" value="Siguiente"></input>
                </form>
            </section>
        );
    }
}