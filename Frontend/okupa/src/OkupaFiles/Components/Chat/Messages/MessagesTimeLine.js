import React, { Component } from 'react';

//Componentes

//CSS
import '../css/Message.css'

export default class ChatList extends Component {

    scrollToBottom = () => {
        document.getElementById('scrollEnd').scrollIntoView();
    }

    componentDidMount () {
    this.scrollToBottom()
    }

    componentDidUpdate () {
    this.scrollToBottom()
    }

    //scrollIntoView()

    render() {

        return(
            <div className="mensajes">
                {this.props.children}

                <div id="scrollEnd" />
            </div>
        );
    }
}