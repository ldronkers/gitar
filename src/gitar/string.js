import React, { Component } from 'react';
import Note from './note'

class String extends Component {
    handleNotes(notes) {
      return(
        this.props.notes.map((item, index) => (
          <Note key={item.id}
            name={item.displayName}
            className={item.class}
            onClicked={(name)=>{this.props.handleAction(item.id)}}>
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
