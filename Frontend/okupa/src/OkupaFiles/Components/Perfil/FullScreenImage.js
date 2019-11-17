import React, { Component } from 'react';

//CSS
import './css/FullScreenImage.css'

export default class FullScreenImage extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className={this.props.clase} onClick={this.props.callback}>
                <img src={this.props.imagen} alt="imagen"/>
            </div>
                 
        );
    }
}
