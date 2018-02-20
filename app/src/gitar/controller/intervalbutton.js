import React, { Component } from 'react';

class IntervalButton extends Component {
    isSelected() {
      return this.props.selectedInterval &&
        this.props.selectedInterval.shortName === this.props.interval.shortName
    }
    render(){
        return(
            <div onClick={()=>{this.props.onClicked(this.props.interval)}} className="interval-button">
              <span className={"interval " + (this.isSelected() ? 'selected' : '')}>{this.props.interval.shortName}</span>
            </div>
        );
    }
}

export default IntervalButton;
