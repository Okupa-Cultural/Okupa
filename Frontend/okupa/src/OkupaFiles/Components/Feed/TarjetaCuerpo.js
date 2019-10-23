import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/TarjetaCuerpo.css';

export default class TarjetaCuerpo extends Component {

    render() {

        return(
            <div className="tarjeta-cuerpo">
                <Link to="/Perfil">
                    <div className="tarjeta-foto"></div>

                    <h4 className="tarjeta-titulo">Jony Mitchell en Bomberitos</h4>
                    <p className="tarjeta-descripcion">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Quos ullam deleniti est 
                        quidem atque facere, eaque 
                        nisi sequi molestiae a, dolorum
                        distinctio natus placeat 
                        necessitatibus harum. Est recusandae 
                        officia repudiandae.
                    </p>
                </Link>
            </div>
        );
    }
}