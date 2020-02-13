import React, { Component } from 'react';

//CSS
import './css/OkTextarea.css';

export default class OkTextarea extends Component {

    render() {
        return(
            <textarea  
            placeholder={this.props.Placeholder} 
            name={this.props.Name} 
            id={this.props.Name}
            rows={this.props.Rows}
            tabIndex={this.props.TabIndex}
            className="textarea" 
            />
        );
    }
}