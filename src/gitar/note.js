import React, { Component } from 'react';

class Note extends Component {
    render(){
        return(
            <div
              className={'note ' + this.props.className}
              onClick={()=>{this.props.onClicked(this.props.name)}}>
              <span
                className="note-label">{this.props.name}
              </span>
            </div>
        );
    }
}

export default Note;
