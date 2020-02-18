import React, { Component } from 'react';

//Componentes
import OkInput from '../Generales/OkInput/OkInput';

//CSS
import './css/SelectorEtiquetas.css'

export default class SelectorEtiquetas extends Component {

    render() {
      if(this.props.ocultar === 0) {
          return(
            <div className="slk-etiquetas">
                <OkInput Type="search" Name="tags" Placeholder="Buscá tus etiquetas" TabIndex="1" />
            </div>
          );
      } else {
        return (<div></div>);
      }
    }
}