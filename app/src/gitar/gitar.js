import React, { Component } from 'react';
import String from './string';
import GitarString from './lib/gitarstring';
import Controller from './controller/controller';
import MusicNote from './lib/musicnote.js';
import MusicInterval from './lib/musicinterval.js';
import MusicScale from './lib/musicscale.js';
import { MenuItem } from './lib/control';

class Gitar extends Component {
    constructor() {
      super()

      this.show = 'sharps';
      this.renameNotes = true;
      this.selectedNote = null;
      this.selectedInterval = null
      this.selectedScale = null;
      this.selectedIntervalNotes = [] // result of selecting, int or scale

      this.state = {
        show: this.show,
        selectedNote: this.selectedNote,
        selectedInterval: this.selectedInterval,
        selectedScale: this.selectedScale,
        selectedIntervalNotes: this.selectedIntervalNotes,
        selectedMenuItem: {}, // not sure if we need this
      };
    }

    handleMenuSelection(menuItem) {
      if (menuItem.type === MenuItem.TYPE_NOTE) {
        this.selectedNote = menuItem.selection;
        if (this.selectedInterval) {
          this.selectedIntervalNotes = [this.selectedNote].concat(
            this.selectedNote.getNote(this.selectedInterval, this.renameNotes)
          )
        }
        // or
        if (this.selectedScale) {
          const scale = MusicScale.getScale(this.selectedScale.name);
          this.selectedIntervalNotes = this.selectedNote.getIntervalNotes(
            scale.intervals, this.renameNotes
          );
        }

      } else if (this.selectedNote &&
        menuItem.type === MenuItem.TYPE_SCALE && menuItem.selection
      ) {
        const scale = MusicScale.getScale(menuItem.selection);
        this.selectedScale = scale;

        this.selectedIntervalNotes = this.selectedNote.getIntervalNotes(
          scale.intervals, this.renameNotes
        );
        this.selectedInterval = null;

      } else if (this.selectedNote && menuItem.type === MenuItem.TYPE_INTERVAL) {
        this.selectedInterval = menuItem.selection;
        this.selectedIntervalNotes = [this.selectedNote].concat(
          this.selectedNote.getNote(menuItem.selection)
        )
        this.selectedScale = null;
      }

      this.updateState()
    }

    updateState() {
      this.setState({
        selectedNote: this.selectedNote,
        selectedInterval: this.selectedInterval,
        selectedScale: this.selectedScale,
        selectedIntervalNotes: this.selectedIntervalNotes,
      });
    }

    handleNoteTypes(e) {
      this.show = e.target.text;
      this.setState({show: this.show});
    }

    handleRenameNotes(e) {
      this.renameNotes = e.target.checked;
    }

    renderString(note) {
      const gitarString = new GitarString(note);
      return (
        <String
          name={note.name}
          selectedNote={this.state.selectedNote}
          intervalNotes={this.state.selectedIntervalNotes}
          notes={gitarString.getNotes(this.state.show)}
          handleNoteSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}>
        </String>
      )
    }

    render(){
        return(
            <div id="gitar">
              <div id="gitar-neck">
                {this.renderString(MusicNote.instance('E'))}
                {this.renderString(MusicNote.instance('B'))}
                {this.renderString(MusicNote.instance('G'))}
                {this.renderString(MusicNote.instance('D'))}
                {this.renderString(MusicNote.instance('A'))}
                {this.renderString(MusicNote.instance('E'))}
              </div>
                <Controller
                  intervals={MusicInterval.getIntervals()}
                  scales={MusicScale.getScales()}
                  modes={MusicScale.getModes()}
                  triads={MusicScale.getTriads()}
                  arpeggios={MusicScale.getArpeggios()}
                  selectedInterval={this.state.selectedInterval}
                  handleMenuSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}
                  handleRenameNotes={(e)=>{this.handleRenameNotes(e)}}
                  renameNotes={this.renameNotes}
                  handleNoteTypes={(e)=>{this.handleNoteTypes(e)}}
                  />
            </div>
        );
    }
}

export default Gitar;
