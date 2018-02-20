import React, { Component } from 'react';
import IntervalButton from './intervalbutton'
import { ScalesMenuItem } from '../lib/control'

class Conroller extends Component {
    handleIntervals(intervals) {
      return (
        intervals.map((item, index) => (
          <IntervalButton key={item.shortName}
            interval={item}
            selectedInterval={this.props.selectedInterval}
            onClicked={(name)=>{this.props.handleAction(item)}}>
          </IntervalButton>
        ))
      )
    }

    renderScales(scales) {
      const options = scales.map((item, index) => (
        <option key={index} value={item.name}>{item.name}</option>
      ))
      return (
        <select onChange={(e) => {this.props.handleMenuSelection(new ScalesMenuItem(e.target.value))}}>
          <option value="">Select a scale</option>
            {options}
        </select>
      )
    }

    render(){
        return(
            <div id="controller">
              <div id="intervals">
                {this.handleIntervals(this.props.intervals)}
                </div>
              <div id="scales">
                {this.renderScales(this.props.scales)}
              </div>
            </div>
        );
    }
}

export default Conroller;
