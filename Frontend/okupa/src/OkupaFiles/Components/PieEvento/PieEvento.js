import React, { Component } from 'react';

//CSS
import './css/PieEvento.css';

export default class PieEvento extends Component {

    render() {
        return(
            <div className="pie-evento" >   
                <span type={this.props.eventType} title={this.props.eventType}>
                    {this.props.eventType}
                </span>
                <div className="">
                    <button className="pe-boton-transparente" title="Agendar">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button className="pe-boton" title="Agendar">
                        <i className="fal fa-calendar-alt"></i>
                    </button>
                </div>
            </div>
        );
    }
}