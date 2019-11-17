import React, { Component, ReactPropTypes } from 'react';
import { connect } from 'react-redux';
import '../../../Redux/index';

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

    componentDidMount() {
        console.log(window.store.getState().fullscreenState);
    }

    renderFullscreen = () => {
        var estado = window.store.getState();
        console.log("el estado es: " + estado.fullscreenState);
        if(estado.fullscreenState === 1) {
            return this.state.fullScreenImageActive;
        } else {
            return this.state.fullScreenImageInactive;
        }
    };

    disableFullscreen = () => {
        window.store.dispatch(window.setFullscreenStatus(0));
        this.setState({
            fullscreenStatus: 2
        });
    };

    renderComponent = (data, store) => {
        return (
            <div className={data} onClick={this.disableFullscreen}>
                <img src={store.selectedImage} alt="imagen"/>
            </div>
        );
    };

    render() {

        var estado = window.store.getState();
        var esVisible = this.renderFullscreen();
        var componente = this.renderComponent(esVisible, estado);

        return(
            <div>
                {componente}
            </div>
        );
    }
}