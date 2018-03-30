import React, { Component } from 'react';

class IntervalButton extends Component {
    render(){
        return(
            <div onClick={this.props.onClicked} className="interval-button">
              <span className={"interval " + (this.props.selected ? 'selected' : '')}>{this.props.interval.shortName}</span>
            </div>
        );
    }
}

export default IntervalButton;
