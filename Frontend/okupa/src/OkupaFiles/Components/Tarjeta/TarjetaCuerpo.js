import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/TarjetaCuerpo.css';

export default class TarjetaCuerpo extends Component {

    render() {

        return(
            <div className="tarjeta-cuerpo">
                    <Link to="/evento">
                        <h4 className="tarjeta-titulo">
                            <i class="far fa-calendar-alt"></i>
                            Jony Mitchell: en vivo en Plaza Bomberitos
                        </h4>
                        <img src="https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/10/59b5d5d0e150f.jpeg" alt="" className="tarjeta-imagen"/>
                        <p className="info-descripcion">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Quos ullam deleniti est 
                            quidem atque facere, eaque 
                            nisi sequi molestiae a, dolorum
                            distinctio natus placeat 
                            necessitatibus harum. Asd (...)
                        </p>
                    </Link>
                    <div className="tarjeta-info">
                        <Link to="/perfil">
                            <div className="info-distancia">
                                a 2.1 km de tu ubicación
                            </div>
                            <div className="info-espacioyfecha">
                                Zeugma Casa Cultural - 12/12/2020
                            </div>
                        </Link>
                    </div>
            </div>
        );
    }
}