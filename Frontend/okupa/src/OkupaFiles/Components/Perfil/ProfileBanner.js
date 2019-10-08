import React, { Component } from 'react';
import './css/ProfileBanner.css';

export default class ProfileBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img className="profile-banner-image" src={this.props.banner} />
        );
    }
}