import { goRound } from './utils';

class MusicNote {

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
    EFF: new MusicNote(2, 'D', 'Ebb'),
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
    ASS: new MusicNote(11, 'B', 'A##'),
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

  getNote(interval, rename=true) {
    const intervalNames = this.getIntervals();
    let intervalNote = intervalNames[interval.semitones];

    if (rename) {
      const expectedNote = this.getExpectedNote(interval);
      if (intervalNote[0] !== expectedNote.name) {
        intervalNote = this.rename(intervalNote, expectedNote);
      }
    }

    return MusicNote.instance(intervalNote);
  }

  rename(noteName, expectedNote) {
    const notes = this.getIntervals(expectedNote);

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
    return expectedNote.name + sign.repeat(semitones);
  }

  getExpectedNote(interval) {
    const notes = MusicNote.NOTE_NAMES;
    const position = notes.indexOf(this.displayName[0]);
    const noteNames = goRound(notes, position);
    return MusicNote.instance(noteNames[interval.shortName.match(/[1-9]/) -1]); // refactor
  }

  getIntervals(note=null) {
    note = note === null ? this : note;
    const match = note.displayName.match(/b/);
    const notes = match ? MusicNote.INTERVAL_NOTES_FLAT : MusicNote.INTERVAL_NOTES_SHARP;
    const position = notes.indexOf(note.displayName);
    return goRound(notes, position);
  }

  getIntervalNotes(intervals, rename=true) {
    let result = []
    intervals.map((interval, index) => (
      result.push(this.getNote(interval, rename))
    ));
    return result;
  }

  get unsignedName() {
    return this.name[0];
  }
}

export default MusicNote;
