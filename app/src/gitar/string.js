import React, { Component } from 'react';
import Note from './note'
import { NotesMenuItem } from './lib/control'

class String extends Component {

    getIntervalNote(note) {
      const lenght = this.props.intervalNotes.length;
      for (let i = 0; i < lenght; i++) {
        if (note.id === this.props.intervalNotes[i].id){
          return this.props.intervalNotes[i];
        }
      }
    }

    renderNotes(notes) {
      return(
        this.props.notes.map((note, index) => (
          <Note key={note.id}
            selectedNote={this.props.selectedNote}
            isIntervalNote={this.getIntervalNote(note) ? true : false}
            note={this.getIntervalNote(note) ? this.getIntervalNote(note) : note}
            onClicked={(note) => {this.props.handleNoteSelection(new NotesMenuItem(note))}}>
          </Note>
        ))
      )
    }

    render(){
        return(
            <div className="string">
              <div className="string-name">{this.props.name}</div>
              {this.renderNotes(this.props.notes)}
            </div>
        );
    }
}

export default String;
