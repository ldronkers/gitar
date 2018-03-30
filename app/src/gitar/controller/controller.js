import React, { Component } from 'react';
import IntervalButton from './intervalbutton';
import MusicScale from '../lib/musicscale';

class Conroller extends Component {

    isSelectedInterval(interval) {
        return this.props.selectedInterval &&
          this.props.selectedInterval.shortName === interval.shortName
    }

    renderleIntervals(intervals) {
      return (
        intervals.map((interval, index) => (
          <IntervalButton key={interval.shortName}
            interval={interval}
            selected={this.isSelectedInterval(interval)}
            selectedInterval={this.props.selectedInterval}
            onClicked={(intervals) => {this.props.handleIntervalsSelection([interval])}}>
          </IntervalButton>
        ))
      )
    }

    renderScales(scales) {
      const options = scales.map((item, index) => (
        <option key={index} value={item.name}>{item.name}</option>
      ))
      return (
        <select onChange={(intervals) => {this.props.handleIntervalsSelection(
          MusicScale.getScale(intervals.target.value).intervals
        )}}>
          <option value="">Select a scale</option>
            {options}
        </select>
      )
    }

    render(){
        return(
            <div id="controller">
              <div className="intervals">
                {this.renderleIntervals(this.props.intervals)}
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
                <div className="renameNotes">
                  <input type="checkbox" id="renameNotes" value="rename"
                    defaultChecked={this.props.renameNotes}
                    onChange={this.props.handleRenameNotes}
                    />
                  <label htmlFor="renameNotes">rename notes</label>
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
