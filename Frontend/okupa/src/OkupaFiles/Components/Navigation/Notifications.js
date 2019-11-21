import React, { Component } from 'react';

export default class Notifications extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MensajeNotificacion : [{visto: 0}],
            Notificacion : [{visto: 0}],
            AmigoNotificacion : [{visto: 0}],
            NotificacionesSinLeer: 0,
            NotificacionesMensajeSinLeer: 0,
            NotificacionesAmigoSinLeer: 0,
        }
    }

    componentDidMount() {
        this.checkearNotificaciones(1);
        this.checkearNotificaciones(2);
    }

    checkearNotificaciones = (tipoNotificacion) => {

        let NotificacionesCantidad = 0;
        let NotificacionesMensajeCantidad = 0;
        let NotificacionesAmigoCantidad = 0;

       switch(tipoNotificacion) {
            case 1: 
                NotificacionesCantidad = this.recorrerNotificaciones(this.state.Notificacion);
                this.updateNotificacion(NotificacionesCantidad, 1); 
                break;
            case 2: 
                NotificacionesMensajeCantidad = this.recorrerNotificaciones(this.state.MensajeNotificacion); 
                this.updateNotificacion(NotificacionesMensajeCantidad, 2);
                break;
            case 3: 
                NotificacionesAmigoCantidad = this.recorrerNotificaciones(this.state.AmigoNotificacion); 
                this.updateNotificacion(NotificacionesAmigoCantidad, 3);
                break;
           default: break;
       }
    };
    //INICIO DE FUNCIONES LOGICAS
    recorrerNotificaciones = (Notificacion) => {
        let NotificacionCantidad = 0;

        for( let i = 0; i < Notificacion.length; i++) {
            if(!Notificacion[i].visto) {
                NotificacionCantidad++;
            }
        }

        return NotificacionCantidad;
    };

    updateNotificacion = (Notificaciones, tipoNotificacion) => {
        
        switch(tipoNotificacion) {
            case 1:  
                if(Notificaciones > 0) {
                    this.setState({
                        NotificacionesSinLeer : Notificaciones,
                    });
                } else if(this.state.NotificacionesSinLeer > 0) {
                    this.setState({
                        NotificacionesSinLeer : 0,
                    });
                } break;

            case 2:
                if(Notificaciones > 0) {
                    this.setState({
                        NotificacionesMensajeSinLeer : Notificaciones,
                    });
                } else if(this.state.NotificacionesMensajeSinLeer > 0) {
                    this.setState({
                        NotificacionesMensajeSinLeer : 0,
                        });
                } break;

            case 3:
                if(Notificaciones > 0) {
                    this.setState({
                        NotificacionesAmigoSinLeer : Notificaciones,
                    });
                } else if(this.state.NotificacionesAmigoSinLeer > 0) {
                    this.setState({
                        NotificacionesAmigoSinLeer : 0,
                    });
                } break;

            default: break;     
        }
    }
    //FIN DE FUNCIONES LOGICAS
    
    renderNotificacion = (tipoNotificacion) => {
        let resultado;

        switch(tipoNotificacion) {
            case 1: resultado = (this.state.NotificacionesSinLeer === 0) ? 'notificacion' :'notificacion-activa'; break;
            case 2: resultado = (this.state.NotificacionesMensajeSinLeer === 0) ? 'notificacion' :'notificacion-activa'; break;
            case 3: resultado = (this.state.NotificacionesAmigoSinLeer === 0) ? 'notificacion' :'notificacion-activa'; break;
            default: break;
        }

        return resultado;
    };
    
    render() {
        return(
            <div className="notification-container">
                <i className={"fas fa-envelope " + this.renderNotificacion(2)}></i>
                <i className={"fas fa-bell " + this.renderNotificacion(1)}></i>
                <i className={"fas fa-user-friends " + this.renderNotificacion(3)}></i>
            </div>
        );
    }
}