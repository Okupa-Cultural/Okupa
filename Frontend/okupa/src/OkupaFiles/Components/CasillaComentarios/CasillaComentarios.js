import React, { Component } from 'react';

//CSS
import './css/CasillaComentarios.css';

//COMPONENTES
import Comentario from './Comentario';


export default class CasillaComentarios extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          comentarios : [{ username: '', body: '' }]
        }
      }
  
      getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }
  
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(json => { this.setState({ comentarios: json}); });
      }

    renderComentarios = (comentario) => {
        return <Comentario content={comentario.body} username={comentario.name} />
    }
  

    render() {

        var ListaDeComentarios = this.state.comentarios.map(this.renderComentarios);

        return(

            <div className="casilla-comentarios">

                <textarea className="comentario-textbox" />

            	<input type="submit" className="btn-enviar" value="Enviar"></input>
                	
				<div className="listado-comentarios" id="listado-comentarios">
		        	{ListaDeComentarios}
	            </div>

            </div>

        );
    }
}