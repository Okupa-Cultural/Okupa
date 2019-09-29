import React, { Component } from 'react';

export default class NavSearchBarList extends Component {

    constructor(props) {
        super(props);

        this.dropdownSearch = this.dropdownSearch.bind(this);

        this.state = {
            SearchList: []
        }
    }

    dropdownSearch() {
        if(this.props.texto != "") {
            return(<ul><li>{this.props.texto}</li></ul>);
        } else {
            alert("holita");
            return null;
        }
        
    }

    render() {

        let ListaDeBusqueda = this.dropdownSearch;

        return(
            <div className="nav-bar-search-list">
                {ListaDeBusqueda}

                <ul className="nav-bar-search-list-links">
                    <li>{this.props.texto}</li>
                    <li>saklndsaljkndnlksa</li>
                </ul>
            </div>
        );
    }
}