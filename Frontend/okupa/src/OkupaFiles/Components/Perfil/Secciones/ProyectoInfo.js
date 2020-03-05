import React, { Component } from 'react';

//CSS
import './css/ProyectoInfo.css';

export default class ProyectoInfo extends Component {

    render() {
        return(
            <section className="proyecto-info">
                <div className="fecha-formacion">
                    <h2>
                        Fecha de formación
                    </h2>
                <span className="fecha">
                    01-06-2008
                </span>
                </div>
                <div className="bio">
                    <h2>
                        Biografía
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Provident magni 
                        recusandae quae voluptatum aut cum atque 
                        consequuntur unde in modi ullam quam 
                        officia repudiandae fugiat placeat rerum, 
                        veritatis qui assumenda!
                    </p>
                </div>
            </section>
        );
    }
}