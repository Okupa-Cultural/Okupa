import React, { Component } from 'react';

//Componentes

//CSS
import '../css/ChatList.css'

export default class ChatListElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            visto: 0,
        };
    }

    updateVisto = (vistoActual) => {
        if(!vistoActual){
            this.setState({visto: 1});
        }
    }

    render() {

        const vistoActual = this.props.Visto;

        return(
            <li visto={this.state.visto}>
                <input className="oculto chatRadio" type="radio" name="converzacion" id={this.props.ChatId} />
                <label className="chatListElemento" htmlFor={this.props.ChatId} onClick={this.updateVisto(vistoActual)}>
                    <img src={this.props.ContactoImg} 
                    alt={this.props.Contacto} 
                    className="fotoPerfilContacto"
                    />
                    <div className="contacto">
                        <h4 className="nombreContacto">
                            {this.props.Contacto}
                        </h4>
                        <p className="ultimoMensaje">
                            {this.props.UltimoMensaje} 
                        </p>
                    </div>
                    <div className="converzacionInfo">
                        <div className="entrega">{this.props.Entrega}</div>
                        <div className="chatAlerta"> {this.props.CantMensajes}</div>
                    </div>
                </label>
            </li>
        );
    }
}