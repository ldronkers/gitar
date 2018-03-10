import { goRound } from './utils';

class MusicNote {

  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';

  static NOTE_NAMES = ['C','D','E','F','G','A','B'];

  static ALT_NOTE_NAMES = {
      F: 'E#',
      //B: 'Cb',
      C: 'B#',
      //E: 'Fb',
      G: 'F##',
      D: 'C##',
      E: 'D##',
      B: 'A##',
      A: 'G##'
  };

  static INTERVAL_NOTES_SHARP = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
  ];

  static notes = {
    c: new MusicNote(0, 'C'),
    bs: new MusicNote(0, 'C', 'B#'),
    dff: new MusicNote(0, 'C', 'Dbb'),
    df: new MusicNote(1, 'Db'),
    cs: new MusicNote(1, 'Db', 'C#'),
    d: new MusicNote(2, 'D'),
    css: new MusicNote(2, 'D'),
    eff: new MusicNote(2, 'D', 'Ebb'),
    ef: new MusicNote(3, 'Eb'),
    ds: new MusicNote(3, 'Eb', 'D#'),
    e: new MusicNote(4, 'E'),
    dss: new MusicNote(4, 'E', 'D##'),
    ff: new MusicNote(4, 'E', 'Fb'),
    f: new MusicNote(5, 'F'),
    es: new MusicNote(5, 'F', 'E#'),
    gff: new MusicNote(5, 'F', 'Gbb'),
    gf: new MusicNote(6, 'Gb'),
    fs: new MusicNote(6, 'Gb', 'F#'),
    g: new MusicNote(7, 'G'),
    fss: new MusicNote(7, 'G', 'F##'),
    aff: new MusicNote(7, 'G', 'Abb'),
    af: new MusicNote(8, 'Ab'),
    gs: new MusicNote(8, 'Ab', 'G#'),
    a: new MusicNote(9, 'A'),
    gss: new MusicNote(9, 'A', 'G##'),
    bff: new MusicNote(9, 'A', 'Bbb'),
    bf: new MusicNote(10, 'Bb'),
    as: new MusicNote(10, 'Bb', 'A#'),
    b: new MusicNote(11, 'B'),
    cf: new MusicNote(11, 'B', 'Cb')
  }

  constructor(id, name, displayName=''){
    this.id = id;
    this.name = name;
    this.displayName = displayName ? displayName : name;
  }

  static instance(noteName) {
    noteName = noteName.replace('b', 'f').replace('b', 'f');
    noteName = noteName.replace('#', 's').replace('#', 's');
    const name = noteName.toLowerCase();
    return MusicNote.notes[name];
  }

  static getNotes() {
    return [
      MusicNote.notes['c'],
      MusicNote.notes['df'],
      MusicNote.notes['d'],
      MusicNote.notes['ef'],
      MusicNote.notes['e'],
      MusicNote.notes['f'],
      MusicNote.notes['gf'],
      MusicNote.notes['g'],
      MusicNote.notes['af'],
      MusicNote.notes['a'],
      MusicNote.notes['bf'],
      MusicNote.notes['b'],
    ];
  }

  static getNotesLeft(){
    return [
      MusicNote.notes['c'],
      MusicNote.notes['cs'],
      MusicNote.notes['d'],
      MusicNote.notes['ds'],
      MusicNote.notes['e'],
      MusicNote.notes['f'],
      MusicNote.notes['fs'],
      MusicNote.notes['g'],
      MusicNote.notes['gs'],
      MusicNote.notes['a'],
      MusicNote.notes['as'],
      MusicNote.notes['b']
    ];
  }

  static getForInterval(note, interval) {
    const notes = MusicNote.INTERVAL_NOTES_SHARP;
    const position = notes.indexOf(note.displayName);
    const intervalNames = goRound(notes, position);
    let result = intervalNames[interval.semitones];

    // If the result does not match the notename that needs to be displayed
    // it's E's (E#) turn, and not F
    const nextNoteName = MusicNote.getNoteName(note, interval);
    if (result[0] !== nextNoteName) { // refactor unsigned name 'C#'[0] = 'C'
      result = MusicNote.ALT_NOTE_NAMES[result];
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
