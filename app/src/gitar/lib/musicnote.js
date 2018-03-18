import { goRound } from './utils';

class MusicNote {

  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';

  static NOTE_NAMES = ['C','D','E','F','G','A','B'];

  static ALT_NOTE_NAMES = {
      B: 'Cb',
      C: 'B#',
      E: 'Fb',
      F: 'E#'
      // AS: 'Bb',
      // GS: 'Ab',
      // CS: 'Db',
      // DS: 'Eb'
  };

  static INTERVAL_NOTES_SHARP = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
  ];

  static INTERVAL_NOTES_FLAT = [
    'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
  ];

  static notes = {
    C: new MusicNote(0, 'C'),
    BS: new MusicNote(0, 'C', 'B#'),
    DF: new MusicNote(1, 'Db'),
    CS: new MusicNote(1, 'Db', 'C#'),
    D: new MusicNote(2, 'D'),
    EF: new MusicNote(3, 'Eb'),
    DS: new MusicNote(3, 'Eb', 'D#'),
    E: new MusicNote(4, 'E'),
    FF: new MusicNote(4, 'E', 'Fb'),
    F: new MusicNote(5, 'F'),
    ES: new MusicNote(5, 'F', 'E#'),
    GF: new MusicNote(6, 'Gb'),
    FS: new MusicNote(6, 'Gb', 'F#'),
    G: new MusicNote(7, 'G'),
    AF: new MusicNote(8, 'Ab'),
    GS: new MusicNote(8, 'Ab', 'G#'),
    A: new MusicNote(9, 'A'),
    BF: new MusicNote(10, 'Bb'),
    AS: new MusicNote(10, 'Bb', 'A#'),
    B: new MusicNote(11, 'B'),
    CF: new MusicNote(11, 'B', 'Cb')
  }

  constructor(id, name, displayName=''){
    this.id = id;
    this.name = name;
    this.displayName = displayName ? displayName : name;
  }

  static instance(noteName) {
    noteName = noteName.replace('b','F');
    noteName = noteName.replace('#', 'S');
    return MusicNote.notes[noteName];
  }

  static getNotes() {
    return [
      MusicNote.notes['C'],
      MusicNote.notes['DF'],
      MusicNote.notes['D'],
      MusicNote.notes['EF'],
      MusicNote.notes['E'],
      MusicNote.notes['F'],
      MusicNote.notes['GF'],
      MusicNote.notes['G'],
      MusicNote.notes['AF'],
      MusicNote.notes['A'],
      MusicNote.notes['BF'],
      MusicNote.notes['B'],
    ];
  }

  static getNotesLeft(){
    return [
      MusicNote.notes['C'],
      MusicNote.notes['CS'],
      MusicNote.notes['D'],
      MusicNote.notes['DS'],
      MusicNote.notes['E'],
      MusicNote.notes['F'],
      MusicNote.notes['FS'],
      MusicNote.notes['G'],
      MusicNote.notes['GS'],
      MusicNote.notes['A'],
      MusicNote.notes['AS'],
      MusicNote.notes['B']
    ];
  }

  static getForInterval(note, interval) {
    const notes = note.displayName.match(/b/) ? MusicNote.INTERVAL_NOTES_FLAT : MusicNote.INTERVAL_NOTES_SHARP;
    const position = notes.indexOf(note.displayName);
    const intervalNames = goRound(notes, position);
    let result = intervalNames[interval.semitones];

    // If the result does not match the notename that needs to be displayed
    // it's E's (E#) turn, and not F
    const nextNoteName = MusicNote.getNoteName(note, interval);
    if (result[0] !== nextNoteName) {
      if (result[0] in MusicNote.ALT_NOTE_NAMES) {
        result = MusicNote.ALT_NOTE_NAMES[result[0]]
      }
    }

    return MusicNote.instance(result);
  }

  static getNoteName(note, interval){
    const notes = MusicNote.NOTE_NAMES;
    const position = notes.indexOf(note.displayName[0]);
    const noteNames = goRound(notes, position);
    return noteNames[interval.shortName.match(/[1-9]/) -1]; // refactor
  }

  get unsignedName() {
    return this.name[0];
  }
}

export default MusicNote;
