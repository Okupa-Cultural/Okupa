import React, { Component } from 'react';
//Components
import NavBar from './../Components/Navigation/NavBar';
import Notification from './../Components/Notifications/Notification';
//CSS
import './css/Notificaciones.css';

export default class Notificaciones extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notificaciones: [{ message: '¡Un usuario te ha aplaudido!', type: 0,},
                             { message: '¡Un usuario te ha seguido!', type: 1,},
                             { message: '¡Un usuario ha comentado tu publicación!', type: 2,},
                             { message: '¡Un usuario te ha aplaudido!', type: 0,},
                             { message: '¡Un usuario te ha seguido!', type: 1,},
                             { message: '¡Un usuario ha comentado tu publicación!', type: 2,},
                             { message: '¡Un usuario te ha aplaudido!', type: 0,},
                             { message: '¡Un usuario te ha seguido!', type: 1,},
                             { message: '¡Un usuario ha comentado tu publicación!', type: 2,},
                             { message: '¡Un usuario te ha aplaudido!', type: 0,},
                             { message: '¡Un usuario te ha seguido!', type: 1,},
                             { message: '¡Un usuario ha comentado tu publicación!', type: 2,},
                            ],
        };
    }

    renderNotificaciones = (data, index) => {
        return <Notification key={index} type={data.type} message={data.message} />;
    }

    render() {

        let ContenedorDeNotificaciones = this.state.notificaciones.map(this.renderNotificaciones);

        return(
            <div className="notificacion-screen">
                <nav className="notificacion-nav">
                    <NavBar />
                </nav>

                <div className="notificacion-notificaciones">
                    <div className="notificaciones-titulo">
                        <h2>Notificaciones</h2>
                    </div>
                    {ContenedorDeNotificaciones}
                </div>
            </div>
        );
    }
}