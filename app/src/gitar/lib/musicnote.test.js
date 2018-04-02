import MusicNote from './musicnote';
import MusicInterval from './musicinterval';

describe('test guitar notes', () => {

  test('get notes', () => {
    const note = MusicNote.instance('E#');
    const notes = note.getAllIntervalNames();
    expect(notes[0]).toBe('F');
  });

  test('get notes for A##', () => {
    const note = MusicNote.instance('A##');
    const notes = note.getAllIntervalNames();
    expect(notes[0]).toBe('B');
  });

  test('get notes for Ebb', () => {
    const note = MusicNote.instance('Ebb');
    const notes = note.getAllIntervalNames();
    expect(notes[0]).toBe('D');
  });

  test('get notes for C##', () => {
    const note = MusicNote.instance('C##');
    const notes = note.getAllIntervalNames();
    expect(notes[0]).toBe('D');
  });

  test('get note name', () => {
    const notes = [
      {name: 'B#', note: MusicNote.instance('B#')},
      {name: 'E#', note: MusicNote.instance('E#')},
    ];

    for (let i = 0; i < notes.length; i++) {
      expect(MusicNote.instance(notes[i].name)).toEqual(notes[i].note);
    }
  });

  test('get display name', () => {
    const notes = [
      {name: 'B#', note: MusicNote.instance('B#')},
      {name: 'E#', note: MusicNote.instance('E#')},
    ];

    for (let i = 0; i < notes.length; i++) {
      expect(MusicNote.instance(notes[i].name).displayName).toEqual(notes[i].note.displayName);
    }
  });
});

test('get interval notes', () => {
  const intervals = [MusicInterval.PER_4TH, MusicInterval.PER_5TH];
  const expectedNotes = [
    MusicNote.instance('A'), MusicNote.instance('B')
  ];
  expect(
    MusicNote.instance('E').getIntervalNotes(intervals)
  ).toEqual(expectedNotes)
});

describe('test getting of the right note names', () => {

  test('get name of interval note', () => {
    const note = MusicNote.instance('B').getNote(MusicInterval.MAJ_2ND);
    expect(note.displayName).toBe('C#');
  });

  test('f-sharp major scale, maj 7th', () => {
    const note = MusicNote.instance('F#').getNote(MusicInterval.MAJ_7TH);
    expect(note.displayName).toBe('E#');
  });

  test('g-sharp major scale, maj 3d', () => {
    const note = MusicNote.instance('G#').getNote(MusicInterval.MAJ_3RD);
    expect(note.displayName).toBe('B#');
  });

  test('g-sharp major scale, maj 6th', () => {
    const note = MusicNote.instance('G#').getNote(MusicInterval.MAJ_6TH);
    expect(note.displayName).toBe('E#');
  });

  test('f major scale, per 4th', () => {
    const note = MusicNote.instance('F').getNote(MusicInterval.PER_4TH);
    expect(note.displayName).toBe('Bb');
  });

  test('f nat minor scale, min 3rd', () => {
    const note =  MusicNote.instance('F').getNote(MusicInterval.MIN_3RD);
    expect(note.displayName).toBe('Ab');
  });

  test('f nat minor scale, per 4th', () => {
    const note = MusicNote.instance('F').getNote(MusicInterval.PER_4TH);
    expect(note.displayName).toBe('Bb');
  });

  test('f nat minor scale, per 5th', () => {
    const note = MusicNote.instance('F').getNote(MusicInterval.PER_5TH);
    expect(note.displayName).toBe('C');
  });

  test('f nat minor scale, min 6th', () => {
    const note = MusicNote.instance('F').getNote(MusicInterval.MIN_6TH);
    expect(note.displayName).toBe('Db');
  });

  test('f nat minor scale, min 7th', () => {
    const note = MusicNote.instance('F').getNote(MusicInterval.MIN_7TH);
    expect(note.displayName).toBe('Eb');
  });

  test('Ab major scale, per 4tth', () => {
    const note = MusicNote.instance('Ab').getNote(MusicInterval.PER_4TH);
    expect(note.displayName).toBe('Db');
  });

  test('Db major scale, dim 5th', () => {
    const note = MusicNote.instance('Db').getNote(MusicInterval.DIM_5TH);
    expect(note.displayName).toBe('Abb');
  });

  test('Get wrong note instance', () => {
    expect(() => {
      MusicNote.instance('Ks')
    }).toThrow('Notename "Ks" not a valid notename}.');
  });
});
