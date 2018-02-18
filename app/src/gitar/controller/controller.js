import React, { Component } from 'react';
import IntervalButton from './intervalbutton'

class Conroller extends Component {
    handleIntervals(intervals) {
      return(
        intervals.map((item, index) => (
          <IntervalButton key={item.shortName}
            interval={item}
            selectedInterval={this.props.selectedInterval}
            onClicked={(name)=>{this.props.handleAction(item)}}>
          </IntervalButton>
        ))
      )
    }
    
    render(){
        return(
            <div id="controller">
              {this.handleIntervals(this.props.intervals)}
            </div>
        );
    }
}

export default Conroller;
