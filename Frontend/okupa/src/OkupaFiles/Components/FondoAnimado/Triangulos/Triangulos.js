import React, { Component } from 'react';

//CSS
import './css/Triangulos.css';

export default class FondoAnimado extends Component {

    render() {
        return(
            <div className="tr-contenedor">
                <svg width="200" height="175" xmlns="http://www.w3.org/2000/svg" className="triangulo-chico sombra">
                 {/*<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->*/}
                    <defs>
                        <linearGradient spreadMethod="pad" y2="1" x2="0.441475" y1="0" x1="0.441475" id="svg_4">
                            <stop offset="0" stop-color="#067de9"/>
                            <stop offset="0.996094" stop-color="#1a2534"/>
                        </linearGradient>
                    </defs>
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="177" width="202" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <path stroke="null" id="svg_1" d="m0.75,172.999927l98.500004,-172.374927l98.500004,172.374927l-197.000008,0z" stroke-width="1.5" fill="url(#svg_4)"/>
                    </g>
                </svg>

                <svg width="300" height="262.5" xmlns="http://www.w3.org/2000/svg" className="triangulo-mediano">
                 {/*<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->*/}
                    <defs>
                        <linearGradient spreadMethod="pad" y2="1" x2="0.441475" y1="0" x1="0.441475" id="svg_4">
                            <stop offset="0" stop-color="#067de9"/>
                            <stop offset="0.996094" stop-color="#1a2534"/>
                        </linearGradient>
                    </defs>
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="264.5" width="302" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <path id="svg_1" d="m0.75,260.499881l148.500001,-259.874881l148.500001,259.874881l-297.000003,0z" stroke-width="1.5" fill="url(#svg_4)"/>
                    </g>
                </svg>

                <svg width="400" height="350" xmlns="http://www.w3.org/2000/svg" className="triangulo-grande sombra" >
                 {/*<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->*/}
                    <defs> 
                        <linearGradient spreadMethod="pad" y2="1" x2="0.441475" y1="0" x1="0.441475" id="svg_4">
                            <stop offset="0" stop-color="#067de9"/>
                            <stop offset="0.996094" stop-color="#1a2534"/>
                        </linearGradient>
                    </defs>
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="352" width="402" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Triangulo</title>
                        <path id="svg_1" d="m1,347.99983l198.499995,-347.37483l198.499995,347.37483l-396.99999,0z" stroke-width="1.5" fill="url(#svg_4)"/>
                    </g>
                </svg>
            </div>
        );
    }
}