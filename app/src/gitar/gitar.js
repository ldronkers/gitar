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
      this._selectedNote = null;
      this.selectedInterval = null
      this._selectedIntervals = []
      this.selectedIntervalNotes = []

      this.state = {
        selectedNote: this._selectedNote,
        selectedInterval: this.selectedInterval,
        selectedScale: this.selectedScale,
        selectedIntervals: this.selectedIntervals,
        selectedIntervalNotes: this.selectedIntervalNotes,
      };
    }

    set selectedNote(note) {
      if (note.displayName.length === 3) {
        this._selectedNote = MusicNote.instance(note.name);
      } else {
        this._selectedNote = note;
      }
    }

    get selectedNote() {
      return this._selectedNote;
    }

    set selectedIntervals(intervals) {
      this._selectedIntervals = intervals;
      if(intervals.length === 1) {
        this.selectedInterval = intervals[0];
      }
    }

    get selectedIntervals() {
      return this._selectedIntervals;
    }

    handleNoteSelection(note) {
      this.selectedNote = note;
      this.setState({selectedNote: this.selectedNote});
      this.updateNeck()
    }

    handleIntervalsSelection(intervals) {
      if(this.selectedNote) {
        this.selectedIntervals = intervals;

        this.selectedIntervalNotes = this.selectedNote.getIntervalNotes(
          intervals, this.renameNotes
        );

        this.setState({
          selectedInterval: this.selectedInterval,
          selectedIntervalNotes: this.selectedIntervalNotes,
        });
      }
    }

    handleNoteTypes(e) {
      this.setState({show: e.target.text});
      // if (this.selectedNote) {
      //   let name = this.selectedNote.displayName;
      //   if (e.target.text === 'flats') {
      //     name = name.replace('#', 'b').replace('#', 'b');
      //     this.selectedNote = MusicNote.instance(name);
      //   }
      // }
      // this.updateNeck()
    }

    handleRenameNotes(e) {
      this.renameNotes = e.target.checked;
      this.updateNeck()
    }

    updateNeck() {
      if(this.selectedIntervals.length > 0){
        this.handleIntervalsSelection(this.selectedIntervals)
      }
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
                renameNotes={this.renameNotes}
                handleIntervalsSelection={(intervals)=>{this.handleIntervalsSelection(intervals)}}
                handleNoteSelection={(note)=>{this.handleNoteSelection(note)}}
                handleRenameNotes={(e)=>{this.handleRenameNotes(e)}}
                handleNoteTypes={(e)=>{this.handleNoteTypes(e)}}
              />
            </div>
        );
    }
}

export default Gitar;
