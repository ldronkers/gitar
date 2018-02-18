import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import { Music, MusicNote, MusicInterval } from './lib/music.js';

class Gitar extends Component {
    constructor() {
      super()

      const music = new Music([
          {minute: 0, id: 0, name: 'C', displayName: 'C', class: ''},
          {minute: 7, id: 1, name: 'Db', displayName: 'C#/Db', class: ''},
          {minute: 2, id: 2, name: 'D', displayName: 'D', class: ''},
          {minute: 9, id: 3, name: 'Eb', displayName: 'D#/Eb', class: ''},
          {minute: 4, id: 4, name: 'E', displayName: 'E', class: ''},
          {minute: 11, id: 5, name: 'F', displayName: 'F', class: ''},
          {minute: 6, id: 6, name: 'Gb', displayName: 'F#/Gb', class: ''},
          {minute: 1, id: 7, name: 'G', displayName: 'G', class: ''},
          {minute: 8, id: 8, name: 'Ab', displayName: 'G#/Ab', class: ''},
          {minute: 3, id: 9, name: 'A', displayName: 'A', class: ''},
          {minute: 10, id: 10, name: 'Bb', displayName: 'A#/Bb', class: ''},
          {minute: 5, id: 11, name: 'B', displayName: 'B', class: ''}
      ])
      
      this.music = music;
      this.interval = MusicInterval.PER_UNI;
      this.state = {
        notes: music.notes,
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
