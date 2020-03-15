import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
//Components
import NavBar from './../Components/Navigation/NavBar';
import Notification from './../Components/Notifications/Notification';
//CSS
import './css/Notificaciones.css';

export default function Notificaciones() {

    const isLogged = useSelector( state => state.isLogged );

    const state = {
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

    const renderNotificaciones = (data, index) => {
        return <Notification key={index} type={data.type} message={data.message} />;
    }

    let ContenedorDeNotificaciones = state.notificaciones.map(renderNotificaciones);

    if(isLogged) {
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
    } else {
        return <Redirect to="/login" />;
    }
}
