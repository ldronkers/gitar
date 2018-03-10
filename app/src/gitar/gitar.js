import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import Music from './lib/music.js';
import MusicNote from './lib/musicnote.js';
import MusicInterval from './lib/musicinterval.js';
import MusicScale from './lib/musicscale.js';
import { MenuItem } from './lib/control';

class Gitar extends Component {
    constructor() {
      super()
      this.music = new Music(MusicNote.getNotesLeft());

      this.selectedNote = null;
      this.selectedInterval = null
      this.selectedScale = null;
      this.selectedIntervalNotes = [] // result of selecting, int or scale

      this.state = {
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
            MusicNote.getForInterval(this.selectedNote, this.selectedInterval)
          )
        }
        // or
        if (this.selectedScale) {
          const scale = MusicScale.getScale(this.selectedScale.name);
          this.selectedIntervalNotes = this.music.getIntervalNotes(
            this.selectedNote, scale.intervals
          );
        }

      } else if (this.selectedNote &&
        menuItem.type === MenuItem.TYPE_SCALE && menuItem.selection
      ) {
        const scale = MusicScale.getScale(menuItem.selection);
        this.selectedScale = scale;

        this.selectedIntervalNotes = this.music.getIntervalNotes(
          this.selectedNote, scale.intervals
        );
        this.selectedInterval = null;

      } else if (this.selectedNote && menuItem.type === MenuItem.TYPE_INTERVAL) {
        this.selectedInterval = menuItem.selection;
        this.selectedIntervalNotes = [this.selectedNote].concat(
          MusicNote.getForInterval(this.selectedNote, menuItem.selection)
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

    handleNoteTypes(e){
      if (e.target.text === 'sharps') {
        this.music = new Music(MusicNote.getNotesLeft());
      } else {
        this.music = new Music(MusicNote.getNotes());
      }
      this.setState({music: this.music});
    }

    renderString(index) {
      const stringNotes = this.music.getStringNotes(index);
      return (
        <String
          name={this.music.notes[index].name}
          selectedNote={this.state.selectedNote}
          intervalNotes={this.state.selectedIntervalNotes}
          notes={stringNotes}
          handleNoteSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}>
        </String>
      )
    }

    render(){
        return(
            <div id="gitar">
              <div id="gitar-neck">
                {this.renderString(MusicNote.E)}
                {this.renderString(MusicNote.B)}
                {this.renderString(MusicNote.G)}
                {this.renderString(MusicNote.D)}
                {this.renderString(MusicNote.A)}
                {this.renderString(MusicNote.E)}
              </div>
                <Controller
                  intervals={MusicInterval.getIntervals()}
                  scales={MusicScale.getScales()}
                  modes={MusicScale.getModes()}
                  triads={MusicScale.getTriads()}
                  arpeggios={MusicScale.getArpeggios()}
                  selectedInterval={this.state.selectedInterval}
                  handleMenuSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}
                  handleNoteTypes={(e)=>{this.handleNoteTypes(e)}}
                  />
            </div>
        );
    }
}

export default Gitar;
