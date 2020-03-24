import React, { Component } from 'react';

//Componentes

//CSS
import '../css/Message.css'

export default class ChatList extends Component {

    render() {
        return(
            <div origen={this.props.Origen} className="mensaje">
                <p>
                    {this.props.Texto}
                </p>
                <div className="hora">
                    {this.props.Hora}
                </div>
            </div>
        );
    }
}