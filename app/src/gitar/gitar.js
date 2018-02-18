import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import { Music, MusicNote, MusicInterval } from './lib/music.js';

class Gitar extends Component {
    constructor() {
      super()
      this.music = new Music(MusicNote.getNotes());
      this.interval = MusicInterval.PER_UNI;
      this.state = {
        notes: this.music.notes,
        interval: this.interval
      };
    }

    setInterval(interval) {
      this.setState({interval:interval})
      this.interval = interval;
    }

    handleAction(clickedNote) {
      const intervalNote = this.music.getInterval(clickedNote, this.interval.semitones)
      intervalNote.class = 'interval'
      clickedNote.class = 'root'
      let notes = this.state.notes.slice()
      this.setState({notes:notes});
    }

    renderString(index) {
      const stringNotes = this.music.getStringNotes(index)
      return (
        <String
          name={this.state.notes[index].name}
          notes={stringNotes}
          handleAction={(id)=>{this.handleAction(this.state.notes[id])}}>
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
                  selectedInterval={this.interval}
                  handleAction={(interval)=>{this.setInterval(interval)}}
                  />
            </div>
        );
    }
}

export default Gitar;
