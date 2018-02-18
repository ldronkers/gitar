import React, { Component } from 'react';
import Note from './note'

class String extends Component {
    handleNotes(notes) {
      return(
        this.props.notes.map((item, index) => (
          <Note key={item.id}
            selectedNote={this.props.selectedNote}
            intervalNote={this.props.intervalNote}
            note={item}
            onClicked={(id)=>{this.props.handleAction(item.id)}}>
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
