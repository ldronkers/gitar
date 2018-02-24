class MusicNote {
  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';

  constructor(name) {
    const note = MusicNote.getNote(name);
    this.id = note.id;
    this.name = note.name;
    // deprecated:
    this.minute = note.minute;
    this.displayName = note.displayName;
  }

  static getNotes() {
     return [
        {minute: 0, id: 0, name: 'C', displayName: 'C'},
        {minute: 7, id: 1, name: 'Db', displayName: 'C#/Db'},
        {minute: 2, id: 2, name: 'D', displayName: 'D'},
        {minute: 9, id: 3, name: 'Eb', displayName: 'D#/Eb'},
        {minute: 4, id: 4, name: 'E', displayName: 'E'},
        {minute: 11, id: 5, name: 'F', displayName: 'F'},
        {minute: 6, id: 6, name: 'Gb', displayName: 'F#/Gb'},
        {minute: 1, id: 7, name: 'G', displayName: 'G'},
        {minute: 8, id: 8, name: 'Ab', displayName: 'G#/Ab'},
        {minute: 3, id: 9, name: 'A', displayName: 'A'},
        {minute: 10, id: 10, name: 'Bb', displayName: 'A#/Bb'},
        {minute: 5, id: 11, name: 'B', displayName: 'B'}
    ];
  }

  static getNote(name){
    const notes = MusicNote.getNotes()
    const length = notes.length;
    for (let i = 0; i < length; i++) {
      if (notes[i].name === name) {
        return notes[i];
      }
    }
  }
}

export default MusicNote;
