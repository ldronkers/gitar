import React, { Component } from 'react';

class Note extends Component {
    getClassName() {
      let result = 'note-label';
      if (this.props.selectedNote
        && (this.props.selectedNote.name === this.props.note.name)) {
        result += ' root';
      } else if (this.props.isIntervalNote) {
        result += ' interval'
      }
      return result;
    }

    render(){
        return(
            <div
              className='note'
              onClick={(note)=>{this.props.onClicked(this.props.note)}}>
              <span
                className={this.getClassName()}>{this.props.note.displayName}
              </span>
            </div>
        );
    }
}

export default Note;
