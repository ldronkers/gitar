import React, { Component } from 'react';
import IntervalButton from './intervalbutton'
import { ScalesMenuItem, IntervalsMenuItem} from '../lib/control'

class Conroller extends Component {
    handleIntervals(intervals) {
      return (
        intervals.map((interval, index) => (
          <IntervalButton key={interval.shortName}
            interval={interval}
            selectedInterval={this.props.selectedInterval}
            onClicked={(interval) => {this.props.handleMenuSelection(new IntervalsMenuItem(interval))}}>
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
              <div className="intervals">
                {this.handleIntervals(this.props.intervals)}
                </div>
              <div className="scales">
                <div className="scale-selection">
                 <span className="scale-selection-label">Scales: </span>{this.renderScales(this.props.scales)}
                </div>
                <div className="scale-selection">
                 <span className="scale-selection-label">Modes: </span>{this.renderScales(this.props.modes)}
                </div>
                <div className="scale-selection">
                 <span className="scale-selection-label">Triads: </span>{this.renderScales(this.props.triads)}
                </div>
                <div className="scale-selection">
                 <span className="scale-selection-label">Arpeggios: </span>{this.renderScales(this.props.arpeggios)}
                </div>
                <div className="flatsharpes">
                    <a href="#sharps" onClick={(e) => {this.props.handleNoteTypes(e)}}>sharps</a> | <a href="#flats" onClick={(e) => {this.props.handleNoteTypes(e)}}>flats</a>
                </div>
              </div>
            </div>
        );
    }
}

export default Conroller;
