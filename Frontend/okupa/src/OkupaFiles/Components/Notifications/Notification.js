import React, { Component } from 'react';
import './css/Notification.css';

export default class Notification extends Component {

    getClass = () => {
        //Type: 0 = Aplauso, 1 = Seguidor nuevo, 2 = Comentario
        switch(this.props.type) {
            case 0: return "fas fa-sign-language icono clap";
            case 1: return "fas fa-user icono follower";
            case 2: return  "fas fa-comments icono comment";
            default: break;
        }
    }

    render() {
        return(
            <div className="notificacion-body">
                <i className={this.getClass()} />
                <p>{this.props.message}</p>
            </div>
        );
    }
}