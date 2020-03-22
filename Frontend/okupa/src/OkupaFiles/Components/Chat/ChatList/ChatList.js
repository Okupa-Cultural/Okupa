import React, { Component } from 'react';

//Componentes

//CSS
import '../css/ChatList.css'

export default class ChatList extends Component {

    render() {
        return(
            <ul className="converzaciones">
                {this.props.children}
            </ul>
        );
    }
}