import React, { Component } from 'react';

//Componentes externos
import TextareaAutosize from 'react-textarea-autosize';

//CSS
import './css/CasillaComentarios.css';

export default class CasillaComentarios extends Component {

  constructor(props){
    super(props);
    this.state = {
      completed: false,
    };
  }

  updateState = () =>{
    var btn = document.getElementById('publicar');

    if(!this.state.completed){
      this.setState({completed: true});
      
      btn.className = 'activePublicar'
    }
  }

    render() {
        return(
            <div className="casillaComentarios">
                <div className="listaComentarios">
                  <div className="forceAlign">
                    <button className="mostrarTodos">Mostrar más comentarios</button>
                  </div>
                  {this.props.children}
                </div>

                <div className="inputComentarios">
                  <TextareaAutosize placeholder={"Añadir un comentario..."} onChange={this.updateState} maxRows={5} />
                  <button type="submit" className="btn-enviar" id="publicar" >Publicar</button>
                </div>
            </div>
        );
    }
}