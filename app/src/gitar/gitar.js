import React, { Component } from 'react';
import String from './string';

class Gitar extends Component {
    constructor() {
      super()
      const notes = [
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
      ]
      this.notes = notes;
      this.state = {notes:notes};
    }

    getStringNotes(index) {
      const start_notes = this.state.notes.slice(index, 12)
      const following_notes = this.state.notes.slice(0, index)
      return start_notes.concat(following_notes)
    }

    handleAction(note) {
      const third = this.getInterval(note, 3)
      third.class = 'interval'
      note.class = 'root'
      let notes = this.state.notes.slice()
      this.setState({notes:notes});
    }

    getInterval(note, interval) {
      //+4==3rd
      //+3==b3rd
      //+7==5th
      //+10==7th
      //+11==octave
      const index = this.getIndex(note.id + interval)
      return this.notes[index]
    }

    getIndex(desiredIndex) {
      const highestIndex = this.state.notes.length -1;
      if (desiredIndex > highestIndex) {
        const beginninIndex = (desiredIndex - highestIndex) -1
        return beginninIndex // go round the other way, fromthe start
      }
      return desiredIndex;
    }

    renderString(index) {
      const stringNotes = this.getStringNotes(index)
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
                {this.renderString(4)}
                {this.renderString(11)}
                {this.renderString(7)}
                {this.renderString(2)}
                {this.renderString(9)}
                {this.renderString(4)}
              </div>
              <div id="gitar-controls"></div>
            </div>
        );
    }
}

export default Gitar;
