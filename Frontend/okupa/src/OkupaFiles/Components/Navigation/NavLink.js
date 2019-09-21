import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './css/NavLink.css';

export default class NavLink extends Component {

  constructor(props) {
    super(props);
  }

    render() {

      return (
        <div className="nav-link">
          <Link to={this.props.link} style={{textDecoration: "none"}}>
          <p className="nav-link-text">{this.props.titulo}</p>
          </Link>
        </div>
      );
    }    
}