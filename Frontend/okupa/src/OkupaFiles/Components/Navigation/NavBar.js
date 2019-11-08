import React, { Component } from 'react';
//import './css/NavBar.css';
import './css/NavBar2.css';
import Logo from './../../../Images/Logo/okupa-logo-color-transparente.png';
import { Link } from 'react-router-dom';

//import NavLink from './NavLink';

//COMPONENTS

import NavSearchBar from './NavSearchBar';
///
export default class NavBar extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="nav-bar-container">
                <div className="nav-bar">
                    <div className="logo">
                        <img src={Logo} alt="Okupa"/>
                        <Link to="/">
                            <p className="nav-bar-titulo">OKUPA</p>
                        </Link>
                    </div>

                    <NavSearchBar show={this.props.showSearchBar} />
                    
                    <div className="nav-bar-links">
                    </div>
                </div>
            </div>
        );
    }
}