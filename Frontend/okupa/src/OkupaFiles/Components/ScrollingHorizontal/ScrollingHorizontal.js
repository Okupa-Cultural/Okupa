import React, { Component } from 'react';

//CSS
import './css/ScrollingHorizontal.css';

export default class ScrollingHorizontal extends Component {

    render() {
        return(
            <div className="scrolling-horizontal" size={this.props.Size}>
                {this.props.children}
            </div>
        );
    }
}