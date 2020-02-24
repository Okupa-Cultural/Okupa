import React, { Component } from 'react';

//CSS
import './css/Ondas.css';

export default class Lineas extends Component {

    render() {
        return(
            <div className="lin-contenedor">
                <svg width="101" height="101" xmlns="http://www.w3.org/2000/svg" className="particula1">
                {/*<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->*/}
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="101" width="101" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <ellipse className="onda1" ry="25" rx="25" id="svg_1" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="onda2" ry="20" rx="20" id="svg_4" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="onda3" ry="15" rx="15" id="svg_5" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="bola" ry="7.5" rx="7.5" id="svg_6" cy="50.5" cx="50.5" strokeWidth="1.5" fill="#087bf5"/>
                    </g>
                </svg>

                <svg width="101" height="101" xmlns="http://www.w3.org/2000/svg" className="particula2">
                {/*<!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->*/}
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="101" width="101" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <ellipse className="onda1" ry="25" rx="25" id="svg_1" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="onda2" ry="20" rx="20" id="svg_4" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="onda3" ry="15" rx="15" id="svg_5" cy="50.5" cx="50.5" strokeWidth="1.5" stroke="#FFF" fill="none"/>
                        <ellipse className="bola" ry="7.5" rx="7.5" id="svg_6" cy="50.5" cx="50.5" strokeWidth="1.5" fill="#087bf5"/>
                    </g>
                    
                </svg>

                
            </div>
        );
    }
}