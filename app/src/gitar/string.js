import React, { Component } from 'react';
import Note from './note'
import { NotesMenuItem } from './lib/control'

class String extends Component {
    isInIntervalNotes(note) {
      const lenght = this.props.intervalNotes.length;
      for (let i = 0; i < lenght; i++) {
        if (note.id === this.props.intervalNotes[i].id){
          return true;
        }
      }
      return false;
    }

    handleNotes(notes) {
      return(
        this.props.notes.map((note, index) => (
          <Note key={note.id}
            selectedNote={this.props.selectedNote}
            intervalNote={this.props.intervalNote}
            isIntervalNote={this.isInIntervalNotes(note)}
            note={note}
            onClicked={(note) => {this.props.handleNoteSelection(new NotesMenuItem(note))}}>
          </Note>
        ))
      )
    }

    render(){
        return(
            <div className="string">
              <div className="string-name">{this.props.name}</div>
              {this.handleNotes(this.props.notes)}
            </div>
        );
    }
}

export default String;
