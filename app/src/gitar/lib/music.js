export class Music {

  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  set notes(notes) {
    this._notes = notes
  }

  getIndex(desiredIndex) {
    const highestIndex = this._notes.length -1;
    if (desiredIndex > highestIndex) {
      const beginninIndex = (desiredIndex - highestIndex) -1
      return beginninIndex // go round the other way, fromthe start
    }
    return desiredIndex;
  }

  //+4==3rd
  //+3==b3rd
  //+7==5th
  //+10==7th
  //+11==octave
  getInterval(note, interval) {
    const index = this.getIndex(note.id + interval)
    return this._notes[index]
  }

  getStringNotes(index) {
    const start_notes = this._notes.slice(index, 12)
    const following_notes = this._notes.slice(0, index)
    return start_notes.concat(following_notes)
  }
}

export class MusicNote {
  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';
}
