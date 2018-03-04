class Guitar {

  constructor() {
    this.notes = Guitar.getNotes();
  }

  static getNotes() {
    return [
      Note.notes['c'],
      Note.notes['df'],
      Note.notes['d'],
      Note.notes['ef'],
      Note.notes['e'],
      Note.notes['f'],
      Note.notes['gf'],
      Note.notes['g'],
      Note.notes['af'],
      Note.notes['a'],
      Note.notes['bf'],
      Note.notes['b'],
    ];
  }

  static getNotesLeft(){
    return [
      Note.notes['c'],
      Note.notes['cs'],
      Note.notes['d'],
      Note.notes['ds'],
      Note.notes['e'],
      Note.notes['f'],
      Note.notes['fs'],
      Note.notes['g'],
      Note.notes['gs'],
      Note.notes['a'],
      Note.notes['as'],
      Note.notes['b']
    ];
  }

  // Gb + 2 semitones Gb G Ab
  // G + 2 semitones G G#/Ab A
  // A# + 2 semitones A# B C
  // Bb + 1 semitone Bb Cb (cant have two b's)
  getScale(note, intervals) {
    let notes = [];
    const length = intervals.length;
    for (let i = 0; i < length; i++) {
      const interval = intervals[i];
      const index = this.getIndex(note.id + interval.semitones)
      notes.push(this.notes[index]);
    }
    return notes;
  }

  getIndex(desiredIndex) {
    const highestIndex = this.notes.length -1;
    if (desiredIndex > highestIndex) {
      const beginninIndex = (desiredIndex - highestIndex) -1
      return beginninIndex // go round the other way, from the start
    }
    return desiredIndex;
  }
}

class Note {

  static intervalContainer = {
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    a: '',
    b: '',
  }

  static notes = {
    c: new Note(0, 'C'),
    bs: new Note(0, 'C', 'B#'),
    dff: new Note(0, 'C', 'Dbb'),
    df: new Note(1, 'Db'),
    cs: new Note(1, 'Db', 'C#'),
    d: new Note(2, 'D'),
    css: new Note(2, 'D'),
    eff: new Note(2, 'D', 'Ebb'),
    ef: new Note(3, 'Eb'),
    ds: new Note(3, 'Eb', 'D#'),
    e: new Note(4, 'E'),
    dss: new Note(4, 'E', 'D##'),
    ff: new Note(4, 'E', 'Fb'),
    f: new Note(5, 'F'),
    es: new Note(5, 'F', 'E#'),
    gff: new Note(5, 'F', 'Gbb'),
    gf: new Note(6, 'Gb'),
    fs: new Note(6, 'Gb', 'F#'),
    g: new Note(7, 'G'),
    fss: new Note(7, 'G', 'F##'),
    aff: new Note(7, 'G', 'Abb'),
    af: new Note(8, 'Ab'),
    gs: new Note(8, 'Ab', 'G#'),
    a: new Note(9, 'A'),
    gss: new Note(9, 'A', 'G##'),
    bff: new Note(9, 'A', 'Bbb'),
    bf: new Note(10, 'Bb'),
    as: new Note(10, 'Bb', 'A#'),
    b: new Note(11, 'B'),
    cf: new Note(11, 'B', 'Cb')
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
    return Note.notes[name];
  }
}

export default Guitar;
export { Note }
