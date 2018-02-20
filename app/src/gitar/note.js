import React, { Component } from 'react';

class Note extends Component {
    getClassName() {
      let result = 'note';
      if (this.props.selectedNote
        && (this.props.selectedNote.id === this.props.note.id)) {
        result += ' root';
      } else if (this.props.isIntervalNote || (this.props.intervalNote &&
        (this.props.intervalNote.id === this.props.note.id))) {
        result += ' interval'
      }
      return result;
    }

    render(){
        return(
            <div
              className={this.getClassName()}
              onClick={(note)=>{this.props.onClicked(this.props.note)}}>
              <span
                className="note-label">{this.props.note.displayName}
              </span>
            </div>
        );
    }
}

export default Note;
