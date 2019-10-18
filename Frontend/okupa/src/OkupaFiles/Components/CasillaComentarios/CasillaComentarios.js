import React, { Component } from 'react';

//CSS
import './css/CasillaComentarios.css';

//COMPONENTES
import Comentario from './Comentario';


export default class CasillaComentarios extends Component {

    render() {

        return(

            <div className="casilla-comentarios">

            	<input type="text" ClassName="comentario-textbox"name="NuevoComentario" autocomplete="off" placeholder="Ingrese un comentario..."></input>
                
                <br />
                <br />
                <br />  

            	<input type="submit" className="banner-buscar-btn" value="Enviar"></input>
                	
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