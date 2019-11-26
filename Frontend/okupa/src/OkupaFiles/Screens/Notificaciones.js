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
            notificaciones: [{ message: 'Mensaje de prueba', type: 0,}],
        };
    }

    renderNotificaciones = (data) => {
        return <Notification type={data.type} message={data.message} />;
    }

    render() {

        let ContenedorDeNotificaciones = this.state.notificaciones.map(this.renderNotificaciones);

        return(
            <div className="notificacion-screen">
                <nav className="notificacion-nav">
                    <NavBar />
                </nav>

                <div className="notificacion-notificaciones">
                    {ContenedorDeNotificaciones}
                </div>
            </div>
        );
    }
}