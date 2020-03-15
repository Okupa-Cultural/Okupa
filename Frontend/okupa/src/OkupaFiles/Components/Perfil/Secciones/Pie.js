import React, { Component } from 'react';

//CSS
import './css/Pie.css';

export default class Pie extends Component {

    constructor(props){
        super(props);
        this.state={
            tweet: 'https://twitter.com/intent/tweet?text=Sigan%20a%20',
            tweetUrl: '!!&url=http%3A%2F%2F',
            hashtags: '&hashtags=okupa',
        };
    }

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
                    value={'https://www.'+this.props.profileDirectLink}
                    >
                    </textarea>
                    
                </div>
                <div className="url">
                    Facebook
                    <div 
                    className="fb-share-button url-boton" 
                    data-href={'https://'+this.props.profileDirectLink}
                    data-layout="button" data-size="large">
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.okupa.com.ar%2F&amp;src=sdkpreparse"
                        className="fb-xfbml-parse-ignore">
                            Compartir
                        </a>
                    </div>
                </div>
                <div className="url">
                    Twitter
                    <div className="tw-share-button url-boton">
                        <a 
                        href={this.state.tweet+this.props.profileName+this.state.tweetUrl+this.props.profileDirectLink+this.state.hashtags} 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                            <span>Twittear</span>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}