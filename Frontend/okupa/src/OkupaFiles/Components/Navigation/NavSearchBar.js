import React, { Component } from 'react';
import './css/NavSearchBar.css';

//Components
import NavSearchBarList from './NavSearchBarList';
//

export default class NavSearchBar extends Component {

    constructor(props) {
        super(props);

        this.dropdownSearch = this.dropdownSearch.bind(this);

        this.state = {
            SearchList: []
        }
    }

    dropdownSearch() {
        if(this._inputElement != "") {
            return(<ul><li>{this._inputElement}</li></ul>);
        } else {
            return null;
        }
        
    }

    render() {

        let ListaDeBusqueda = this.dropdownSearch;

        if(this.props.show) {
            return(
                <div className="nav-bar-search">
                    <input type="text" className="nav-bar-search-bar" ref={(a) => this._inputElement = a } placeholder="Buscar eventos..."></input>
                    <NavSearchBarList texto={this._inputElement}/>
                </div>
            );
        } else {
            return null;
        }
    }
}