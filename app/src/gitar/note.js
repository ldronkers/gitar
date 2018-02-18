import React, { Component } from 'react';

class Note extends Component {
    getClassName() {
      let result = 'note';
      if (this.props.selectedNote
        && (this.props.selectedNote.id === this.props.note.id)) {
        result += ' root';
      } else if (this.props.intervalNote &&
        (this.props.intervalNote.id === this.props.note.id)) {
        result += ' interval'
      }
      return result;
    }

    render(){
        return(
            <div
              className={this.getClassName()}
              onClick={(id)=>{this.props.onClicked(this.props.note.id)}}>
              <span
                className="note-label">{this.props.note.displayName}
              </span>
            </div>
        );
    }
}

export default Note;
