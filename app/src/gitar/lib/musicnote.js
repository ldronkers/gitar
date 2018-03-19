import { goRound } from './utils';

class MusicNote {

  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';

  static NOTE_NAMES = ['C','D','E','F','G','A','B'];

  static INTERVAL_NOTES_SHARP = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
  ];

  static INTERVAL_NOTES_FLAT = [
    'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
  ];

  static NOTES = {
    C: new MusicNote(0, 'C'),
    DFF: new MusicNote(0, 'C', 'Dbb'),
    BS: new MusicNote(0, 'C', 'B#'),
    DF: new MusicNote(1, 'Db'),
    CS: new MusicNote(1, 'Db', 'C#'),
    D: new MusicNote(2, 'D'),
    CSS: new MusicNote(2, 'D', 'C##'),
    EF: new MusicNote(3, 'Eb'),
    DS: new MusicNote(3, 'Eb', 'D#'),
    E: new MusicNote(4, 'E'),
    DSS: new MusicNote(4, 'E', 'D##'),
    FF: new MusicNote(4, 'E', 'Fb'),
    F: new MusicNote(5, 'F'),
    ES: new MusicNote(5, 'F', 'E#'),
    GF: new MusicNote(6, 'Gb'),
    FS: new MusicNote(6, 'Gb', 'F#'),
    G: new MusicNote(7, 'G'),
    AFF: new MusicNote(7, 'G', 'Abb'),
    FSS: new MusicNote(7, 'G', 'F##'),
    AF: new MusicNote(8, 'Ab'),
    GS: new MusicNote(8, 'Ab', 'G#'),
    A: new MusicNote(9, 'A'),
    BFF: new MusicNote(9, 'Bbb'),
    GSS: new MusicNote(9, 'A', 'G##'),
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
    let name = noteName.replace('b','F').replace('b', 'F');
    name = name.replace('#', 'S').replace('#', 'S');

    if (name in MusicNote.NOTES) {
      return MusicNote.NOTES[name];
    } else {
      throw new Error(`Notename "${noteName}" not a valid notename}.`);
    }
  }

  static getNotes() {
    return [
      MusicNote.NOTES['C'],
      MusicNote.NOTES['DF'],
      MusicNote.NOTES['D'],
      MusicNote.NOTES['EF'],
      MusicNote.NOTES['E'],
      MusicNote.NOTES['F'],
      MusicNote.NOTES['GF'],
      MusicNote.NOTES['G'],
      MusicNote.NOTES['AF'],
      MusicNote.NOTES['A'],
      MusicNote.NOTES['BF'],
      MusicNote.NOTES['B'],
    ];
  }

  static getNotesLeft() {
    return [
      MusicNote.NOTES['C'],
      MusicNote.NOTES['CS'],
      MusicNote.NOTES['D'],
      MusicNote.NOTES['DS'],
      MusicNote.NOTES['E'],
      MusicNote.NOTES['F'],
      MusicNote.NOTES['FS'],
      MusicNote.NOTES['G'],
      MusicNote.NOTES['GS'],
      MusicNote.NOTES['A'],
      MusicNote.NOTES['AS'],
      MusicNote.NOTES['B']
    ];
  }

  static getForInterval(note, interval) {
    const notes = note.displayName.match(/b/) ? MusicNote.INTERVAL_NOTES_FLAT : MusicNote.INTERVAL_NOTES_SHARP;
    const position = notes.indexOf(note.displayName);
    const intervalNames = goRound(notes, position);
    const expectedNotename = MusicNote.getNoteName(note, interval);
    let intervalNote = intervalNames[interval.semitones];

    if (intervalNote[0] !== expectedNotename ) {
      intervalNote = MusicNote.rename(intervalNote, expectedNotename);
    }

    return MusicNote.instance(intervalNote);
  }

  static rename(noteName, expectedNotename) {
    let notes = noteName.match(/b/) ? MusicNote.INTERVAL_NOTES_FLAT : MusicNote.INTERVAL_NOTES_SHARP;
    const position = notes.indexOf(expectedNotename);
    notes = goRound(notes, position);

    let semitones = 0;
    for (var note of notes) {
      if (note !== noteName) {
        semitones += 1;
      } else {
        break;
      }
    }

    const sign = semitones >= 10 ? 'b' : '#';
    semitones = semitones >= 10 ? 12 - semitones : semitones;
    return expectedNotename + sign.repeat(semitones);
  }

  static getNoteName(note, interval) {
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
