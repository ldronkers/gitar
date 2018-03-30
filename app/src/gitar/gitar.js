import React, { Component } from 'react';
import String from './string';
import GitarString from './lib/gitarstring';
import Controller from './controller/controller';
import MusicNote from './lib/musicnote.js';
import MusicInterval from './lib/musicinterval.js';
import MusicScale from './lib/musicscale.js';

class Gitar extends Component {
    constructor() {
      super()

      this.renameNotes = true;
      this.selectedNote = null;
      this.selectedInterval = null
      this.selectedIntervals = []
      this.selectedIntervalNotes = []

      this.state = {
        selectedNote: this.selectedNote,
        selectedInterval: this.selectedInterval,
        selectedScale: this.selectedScale,
        selectedIntervals: this.selectedIntervals,
        selectedIntervalNotes: this.selectedIntervalNotes,
      };
    }

    handleNoteSelection(note) {
      this.selectedNote = note;
      this.setState({selectedNote: this.selectedNote});

      if(this.selectedIntervals.length > 0){
        this.handleIntervalsSelection(this.selectedIntervals)
      }
    }

    handleIntervalsSelection(intervals) {
      this.selectedIntervals = intervals;

      if(this.selectedNote) {
        if(intervals.length === 1) {
          this.selectedInterval = intervals[0];
        }

        this.selectedIntervalNotes = this.selectedNote.getIntervalNotes(
          intervals, this.renameNotes
        );

        this.updateState();
      }
    }

    handleNoteTypes(e) {
      this.setState({show: e.target.text});
    }

    handleRenameNotes(e) {
      this.renameNotes = e.target.checked;
    }

    updateState() {
      this.setState({
        selectedInterval: this.selectedInterval,
        selectedIntervalNotes: this.selectedIntervalNotes,
      });
    }

    renderString(note) {
      const gitarString = new GitarString(note);
      return (
        <String
          name={note.name}
          selectedNote={this.state.selectedNote}
          intervalNotes={this.state.selectedIntervalNotes}
          notes={gitarString.getNotes(this.state.show)}
          handleNoteSelection={(note)=>{this.handleNoteSelection(note)}}>
        </String>
      )
    }

    render(){
        return(
            <div id="gitar">
              <div id="gitar-neck">
                {this.renderString(MusicNote.instance('E'))}
                {this.renderString(MusicNote.instance('B'))}
                {this.renderString(MusicNote.instance('G'))}
                {this.renderString(MusicNote.instance('D'))}
                {this.renderString(MusicNote.instance('A'))}
                {this.renderString(MusicNote.instance('E'))}
              </div>
              <Controller
                intervals={MusicInterval.getIntervals()}
                scales={MusicScale.getScales()}
                modes={MusicScale.getModes()}
                triads={MusicScale.getTriads()}
                arpeggios={MusicScale.getArpeggios()}
                selectedInterval={this.state.selectedInterval}
                handleIntervalsSelection={(intervals)=>{this.handleIntervalsSelection(intervals)}}
                handleNoteSelection={(note)=>{this.handleNoteSelection(note)}}
                handleRenameNotes={(e)=>{this.handleRenameNotes(e)}}
                renameNotes={this.renameNotes}
                handleNoteTypes={(e)=>{this.handleNoteTypes(e)}}
              />
            </div>
        );
    }
}

export default Gitar;
