class MusicNote {
  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';
  static SIGN_FLAT = 'b';
  static SIGN_SHARP = '#';

  constructor(name) {
    const note = MusicNote.getNote(name);
    this.contextName = name;
    this.id = note.id;
    this.name = note.name;
    this.altName = note.altName;
    this.displayName = note.displayName;
  }

  get unsignedName() {
    return this.contextName[0];
  }

  get isSigned() {
    return this.getSign(this.name) ? true : false;
  }

  get isFlat() {
    return this.getSign(this.contextName) === 'b' ? true : false;
  }

  get isSharp() {
    return this.getSign(this.contextName) === '#' ? true : false;
  }

  getSign(noteName){
    if (noteName.length === 2){
      return noteName[1];
    }
  }

  static getNotes() {
     return [
        {id: 0, name: 'C', displayName: 'C', altName: ''},
        {id: 1, name: 'Db', displayName: 'C#/Db', altName: 'C#'},
        {id: 2, name: 'D', displayName: 'D', altName: ''},
        {id: 3, name: 'Eb', displayName: 'D#/Eb', altName: 'D#'},
        {id: 4, name: 'E', displayName: 'E', altName: ''},
        {id: 5, name: 'F', displayName: 'F', altName: ''},
        {id: 6, name: 'Gb', displayName: 'F#/Gb', altName: 'F#'},
        {id: 7, name: 'G', displayName: 'G', altName: ''},
        {id: 8, name: 'Ab', displayName: 'G#/Ab', altName: 'G#'},
        {id: 9, name: 'A', displayName: 'A', altName: ''},
        {id: 10, name: 'Bb', displayName: 'A#/Bb', altName: 'A#'},
        {id: 11, name: 'B', displayName: 'B', altName: ''}
    ];
  }

  static getNote(name){
    const notes = MusicNote.getNotes()
    const length = notes.length;
    for (let i = 0; i < length; i++) {
      const n = notes[i];
      if (n.name === name || n.altName === name) {
        return notes[i];
      }
    }
  }
}

export default MusicNote;
