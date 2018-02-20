import React, { Component } from 'react';
import String from './string';
import Controller from './controller/controller'
import { Music, MusicNote, MusicInterval, MusicScale } from './lib/music.js';
import { MenuItem } from './lib/control'

class Gitar extends Component {
    constructor() {
      super()
      this.music = new Music(MusicNote.getNotes());

      this.state = {
        selectedInterval: MusicInterval.PER_UNI,
        selectedNote: {},
        selectedIntervalNotes: []
      };
    }

    setNotes(clickedNote) {
      this.setState({
        notes:MusicNote.getNotes(),
        selectedNote: clickedNote
      });
    }

    handleMenuSelection(menuItem) {
      if (!this.state.selectedNote || !menuItem.selection){
        return;
      }

      if (menuItem.type === MenuItem.TYPE_SCALE) {
        const scale = MusicScale.getScale(menuItem.selection);
        const intervalNotes = this.music.getIntervalNotes(
          this.state.selectedNote, scale.intervals
        );

        this.setState({
          selectedIntervalNotes: intervalNotes}
        );

      } else if (menuItem.type === MenuItem.TYPE_INTERVAL) {
        const intervalNotes = [this.state.selectedNote].concat(
          this.music.getIntervalNote(this.state.selectedNote, menuItem.selection)
        )

        this.setState({
            selectedIntervalNotes: intervalNotes,
            selectedInterval: menuItem.selection
          });
      }
    }

    renderString(index) {
      const stringNotes = this.music.getStringNotes(index)
      return (
        <String
          name={this.music.notes[index].name}
          selectedNote={this.state.selectedNote}
          intervalNotes={this.state.selectedIntervalNotes}
          notes={stringNotes}
          handleAction={(id)=>{this.setNotes(this.music.notes[id])}}>
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
                  selectedInterval={this.state.selectedInterval}
                  handleMenuSelection={(menuItem)=>{this.handleMenuSelection(menuItem)}}
                  />
            </div>
        );
    }
}

export default Gitar;
