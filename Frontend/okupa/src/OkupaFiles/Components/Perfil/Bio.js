import React, { Component } from 'react';

//CSS
import './css/SeccionesColumnaIzq.css'

export default class Bio extends Component {

    render() {
        return(
            <section className="seccion">
                <h4 className="seccion-titulo">
                Bio
                </h4>
                <div className="seccion-caja">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Mollitia et excepturi atque
                ducimus, dolorem dolore sed
                reprehenderit velit veniam
                libero tenetur quae odit,
                dolor consequuntur praesentium
                neque nihil nesciunt quibusdam.
                </div>
            </section>
        );
    }
}