import React, { Component } from 'react';

//CSS
import './css/OkRadio.css';

export default class OkRadio extends Component {

    render() {
        return(
            <div className="radio-agrupador">
                <label className="container">
                    <input 
                    type="radio"
                    name={this.props.name}
                    id={this.props.Id}
                    checked
                    />
                    <span className="checkmark">
                    </span>
                </label>

                <label htmlFor={this.props.Id} className="radio-label">
					{this.props.Label}
				</label>
            </div>
        );
    }
}