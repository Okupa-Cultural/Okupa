import React, { Component } from 'react';

//Componentes

//CSS
import '../css/ChatList.css'

export default class ChatList extends Component {

    render() {
        return(
            <div className="message" origen={this.props.Origen}>
                <p className="contenido">
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Officia ab quasi temporibus magni 
                    sequi fuga quas consequuntur nemo at quam, qui accusamus 
                    repudiandae nam natus excepturi voluptate, architecto 
                    provident neque.
                </p>
            </div>
        );
    }
}