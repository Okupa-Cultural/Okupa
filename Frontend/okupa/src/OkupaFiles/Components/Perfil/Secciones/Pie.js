import React, { Component } from 'react';

//CSS
import './css/Pie.css';

export default class Pie extends Component {

    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
        alert('Enlace copiado correctamente!')
      }

    render() {
        return(
            <section className="footer" ocultoenmoviles={this.props.ocultoEnMoviles}>
                <h2>Compartir&nbsp;<i className="fas fa-share-alt"></i></h2>
                <div className="share">
                    <h3>Link</h3>
                    <textarea
                    ref={(textarea) => this.textArea = textarea} 
                    readOnly 
                    className="link" 
                    id="profileDirectLink"
                    onClick={() => this.copyCodeToClipboard()}
                    value={this.props.profileDirectLink}
                    >
                    </textarea>
                    
                </div>
                <div className="url">
                    Compartir en facebook
                </div>
                <div className="url">
                    Compartir en twitter
                </div>
                <div className="url">
                    Compartir en Instagram storys (creo que se puede)
                </div>
            </section>
        );
    }
}