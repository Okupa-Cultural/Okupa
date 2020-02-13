import React, { Component } from 'react';

//CSS
import './css/OkInput.css';

export default class OkInput extends Component {

    render() {
        return(
            <input 
            type={this.props.Type} 
            placeholder={this.props.Placeholder} 
            value={this.props.Value} 
            name={this.props.Name} 
            id={this.props.Name}
            tabIndex={this.props.TabIndex}
            autoComplete={this.props.AutoComplete}
            className="input" 
            />
        );
    }
}