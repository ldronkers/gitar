import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import { Music, MusicNote, MusicInterval } from './lib/music.js';

class Gitar extends Component {
    constructor() {
      super()
      this.music = new Music(MusicNote.getNotes());
      this.selectedInterval = MusicInterval.PER_UNI;
      this.state = {
        notes: this.music.notes,
        interval: this.selectedInterval
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
      this.intervalNote = this.music.getInterval(
        clickedNote, this.selectedInterval.semitones
      );

      let notes = MusicNote.getNotes();
      notes[this.intervalNote.id] = this.intervalNote;
      notes[clickedNote.id] = clickedNote;
      this.setState({notes:notes});
    }

    renderString(index) {
      const stringNotes = this.music.getStringNotes(index)
      return (
        <String
          name={this.state.notes[index].name}
          selectedNote={this.selectedNote}
          intervalNote={this.intervalNote}
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
                  selectedInterval={this.selectedInterval}
                  handleAction={(interval)=>{this.setInterval(interval)}}
                  />
            </div>
        );
    }
}

export default Gitar;
