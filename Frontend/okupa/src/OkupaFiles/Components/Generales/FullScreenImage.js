import React, { Component/*, ReactPropTypes*/ } from 'react';
//import { connect } from 'react-redux';
import  '../../../Redux/index';

//CSS
import './css/FullScreenImage.css'

export default class FullScreenImage extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            fullScreenImageActive: 'fullscreen-image-background',
            fullScreenImageInactive: 'fullscreen-image-inactive',
            fullscreenStatus: 2,
            selectedImage: '',
        }
    }
    /*
    checkChanges = () => {
        if(this.state.fullscreenStatus !== window.store.getState().fullscreenState) {
            this.setState({
                fullscreenStatus : window.store.getState().fullscreenState
            });
        }
    };
    */
    
    componentDidMount() {
        window.store.subscribe(() => {
            this.setState({
                fullscreenStatus : window.store.getState().fullscreenState,
                selectedImage : window.store.getState().selectedImage,
            });
        });
    }
    
    /*
    componentDidUpdate() {
       this.checkChanges();
    }
    */
    renderFullscreen = (estado) => {
        if(estado === 1) {
            return this.state.fullScreenImageActive
        } else {
            return this.state.fullScreenImageInactive;
        }
    };

    disableFullscreen = () => {
        window.store.dispatch(window.setFullscreenStatus(0));
        this.setState({
            fullscreenStatus: 2
        });
        window.store.unsubscribe();
    };

    render() {
        return(
            <div className={this.renderFullscreen(window.store.getState().fullscreenStatus)} onClick={() => this.disableFullscreen()}>
                <div className="imageContainer">
                    <img src={this.state.selectedImage} alt="imagen"/>
                </div>
            </div>
        );
    }
}

/*
export const mapStateToProps = function(state) {
    return {
      estadoFullscreen: state.fullscreenState,
      image: state.selectedImage,
    }
}
*/
//export default connect(mapStateToProps)(FullScreenImage);