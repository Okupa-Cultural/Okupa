import React, { Component } from 'react';

//CSS
import './css/CasillaComentarios.css';

//COMPONENTES
import Comentario from './Comentario';


export default class CasillaComentarios extends Component {

    render() {

        return(

            <div className="casilla-comentarios">

                <input type="text" className="comentario-textbox" />

            	<input type="submit" className="btn-enviar" value="Enviar"></input>
                	
				<div className="listado-comentarios" id="listado-comentarios">
		        	<Comentario />  
		            <Comentario />
		            <Comentario />
		            <Comentario />
	            </div>

            </div>

        );
    }
}