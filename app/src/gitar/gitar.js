import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import { Music, MusicNote, MusicInterval, MusicScale } from './lib/music.js';
import { MenuItem } from './lib/control'

class Gitar extends Component {
    constructor() {
      super()
      this.music = new Music(MusicNote.getNotes());

      // selectedIntervalNotes: to replace selectedInterval
      // three options to be implemented
      // select an interval a scale, or triad
      this.selectedIntervalNotes = [];
      this.selectedInterval = MusicInterval.PER_UNI;

      this.state = {
        notes: this.music.notes,
        interval: this.selectedInterval,
        selectedIntervalNotes: this.selectedIntervalNotes
      };
    }

    setInterval(interval) {
      this.selectedInterval = interval;
      this.setState({interval:interval});
      if (this.selectedNote) {
        this.setNotes(this.selectedNote);
      }
    }

    setNotes(clickedNote) {
      this.selectedNote = clickedNote;
      this.intervalNote = this.music.getIntervalNote(
        clickedNote, this.selectedInterval
      );

      let notes = MusicNote.getNotes();
      notes[this.intervalNote.id] = this.intervalNote;
      notes[clickedNote.id] = clickedNote;
      this.setState({notes:notes});
    }

    handleMenuSelection(menuItem) {
      if (!this.selectedNote || !menuItem.selection){
        return;
      }

      if (menuItem.type === MenuItem.TYPE_SCALE) {
        const scale = MusicScale.getScale(menuItem.selection);
        const intervalNotes = this.music.getIntervalNotes(
          this.selectedNote, scale.intervals
        );
        // figure out which one and how to manage both?
        this.setState({intervalNotes: intervalNotes});
        this.selectedIntervalNotes = intervalNotes;
      } else if (menuItem.type === MenuItem.TYPE_INTERVAL) {
        // todo: implement
      }
    }

    renderString(index) {
      const stringNotes = this.music.getStringNotes(index)
      return (
        <String
          name={this.state.notes[index].name}
          selectedNote={this.selectedNote}
          intervalNote={this.intervalNote}
          intervalNotes={this.selectedIntervalNotes}
          notes={stringNotes}
          handleAction={(id)=>{this.setNotes(this.state.notes[id])}}>
        </String>
      )
    }

    render(){
        return(
            <div id="gitar">
              <div id="gitar-neck">
                {this.renderString(MusicNote.E)}
                {this.renderString(MusicNote.B)}
                {this.renderString(MusicNote.G)}
                {this.renderString(MusicNote.D)}
                {this.renderString(MusicNote.A)}
                {this.renderString(MusicNote.E)}
              </div>
                <Controller
                  intervals={MusicInterval.getIntervals()}
                  scales={MusicScale.getScales()}
                  selectedInterval={this.selectedInterval}
                  handleMenuSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}
                  handleAction={(interval)=>{this.setInterval(interval)}}
                  />
            </div>
        );
    }
}

export default Gitar;
