import React, { Component } from 'react';
//import './css/NavBar.css';
import './css/NavBar2.css';
import Logo from './../../../Images/Logo/okupa-logo-color-transparente.png';
import { Link } from 'react-router-dom';

//import NavLink from './NavLink';

//COMPONENTS
import Notifications from './Notifications';
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
                        <Link to="/">
                            <img src={Logo} alt="Okupa"/>
                        </Link>
                        <Link to="/">
                            <p className="nav-bar-titulo">OKUPA</p>
                        </Link>
                        <div className="nav-bar-busqueda">
                            <NavSearchBar show={this.props.showSearchBar} />
                        </div>
                    </div>
                    
                    <div className="notifications">
                        <Notifications />
                    </div>
                    
                </div>
            </div>
        );
    }
}