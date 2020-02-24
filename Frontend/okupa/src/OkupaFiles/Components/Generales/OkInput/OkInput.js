import React, { Component } from 'react';

//CSS
import './css/OkInput.css';

export default class OkInput extends Component {

    render() {
        return(
            <div 
            className="input-contenedor" 
            type={this.props.Type}
            format={this.props.Format}
            htmlFor={this.props.Name}
            >

                <label 
                className="file-label"
                htmlFor={this.props.Name}
                icon={this.props.Icon}
                >
                    <i className="fal fa-upload upload"></i>
                    <i className="fal fa-plus-circle agregar"></i>
                    {this.props.Placeholder}
                </label>

                <label 
                className="date-label"
                htmlFor={this.props.Name}
                >
                    {this.props.Placeholder}
                </label>
                            
                <input 
                type={this.props.Type}
                format={this.props.Format}
                placeholder={this.props.Placeholder} 
                value={this.props.Value} 
                name={this.props.Name} 
                id={this.props.Name}
                tabIndex={this.props.TabIndex}
                autoComplete={this.props.AutoComplete}
                className="input" 
                />
                
                <button className="search-icon">
                    <i className="fal fa-search"></i>
                </button>

                <label 
                htmlFor={this.props.Name} 
                className="small-icon" 
                icon={this.props.Icon}
                >
                    <i className="fal fa-calendar-alt calendario"></i>
                    <i className="fal fa-clock reloj"></i>
                </label>

            </div>

        );
    }
}