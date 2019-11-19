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
            fullscreenStatus: window.store.getState().fullscreenStatus
        }
    }

    componentDidUpdate() {
        if(this.state.fullscreenStatus !== window.store.getState().fullscreenState) {
            this.setState({
                fullscreenStatus : window.store.getState().fullscreenState
            });
        }
    }

    renderFullscreen = (estado) => {
       // alert("hola")
        if(estado === 1) {
            return this.state.fullScreenImageActive;
        } else {
            return this.state.fullScreenImageInactive;
        }
    };

    disableFullscreen = () => {
        window.store.dispatch(window.setFullscreenStatus(0));
        console.log("cerrado");
        this.setState({
            fullscreenStatus: 2
        });
    };

    render() {

        var estado = window.store.getState();

        return(
            <div className={this.renderFullscreen(this.props.estadoFullscreen)} onClick={() => this.disableFullscreen()}>
                <img src={window.store.getState().selectedImage} alt="imagen"/>
            </div>
        );
    }
}