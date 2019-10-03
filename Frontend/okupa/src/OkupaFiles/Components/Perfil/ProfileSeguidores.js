import React, { Component } from 'react';

export default class ProfileSeguidores extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="estadisticas">
                <ul>
                    <li>
                        <div className="cifra">{this.props.presentaciones}</div>
                        <div className="leyenda">Presentaciones</div>
                    </li>
                    <li>
                        <div className="cifra">{this.props.seguidores}</div>
                        <div className="leyenda">Seguidores</div>
                    </li>
                    <li>
                        <div className="cifra">{this.props.seguidos}</div>
                        <div className="leyenda">Seguidos</div>
                    </li>
                </ul>
            </div>
                 
        );
    }
}
