import MusicNote from './musicnote';
import MusicInterval from './musicinterval';

describe('test guitar notes', () => {

  test('get note', () => {
    const notes = [
      {name: 'B#', note: new MusicNote(0, 'C', 'B#')},
      {name: 'E#', note: new MusicNote(5, 'F', 'E#')},
    ];

    for (let i = 0; i < notes.length; i++) {
      expect(MusicNote.instance(notes[i].name)).toEqual(notes[i].note);
    }
  });

  test('get display name', () => {
    const notes = [
      {name: 'B#', note: new MusicNote(0, 'C', 'B#')},
      {name: 'E#', note: new MusicNote(5, 'F', 'E#')},
    ];

    for (let i = 0; i < notes.length; i++) {
      expect(MusicNote.instance(notes[i].name).displayName).toEqual(notes[i].note.displayName);
    }
  });

  test('getNotes', () => {
    const notes = MusicNote.getNotes();
    expect(notes[0]).toEqual(new MusicNote(0, 'C'));
  });
});

describe('test getting of the right note names', () => {

  test('get name of interval note', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('B'),
      MusicInterval.MAJ_2ND
    );
    expect(note.displayName).toBe('C#');
  });

  test('f-sharp major scale, maj 7th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F#'),
      MusicInterval.MAJ_7TH
    );
    expect(note.displayName).toBe('E#');
  });

  test('g-sharp major scale, maj 3d', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('G#'),
      MusicInterval.MAJ_3RD
    );
    expect(note.displayName).toBe('B#');
  });

  test('g-sharp major scale, maj 6th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('G#'),
      MusicInterval.MAJ_6TH
    );
    expect(note.displayName).toBe('E#');
  });

  test('f major scale, per 4th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.PER_4TH
    );
    expect(note.displayName).toBe('Bb');
  });

  test('f nat minor scale, min 3rd', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.MIN_3RD
    );
    expect(note.displayName).toBe('Ab');
  });

  test('f nat minor scale, per 4th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.PER_4TH
    );
    expect(note.displayName).toBe('Bb');
  });

  test('f nat minor scale, per 5th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.PER_5TH
    );
    expect(note.displayName).toBe('C');
  });

  test('f nat minor scale, min 6th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.MIN_6TH
    );
    expect(note.displayName).toBe('Db');
  });

  test('f nat minor scale, min 7th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('F'),
      MusicInterval.MIN_7TH
    );
    expect(note.displayName).toBe('Eb');
  });

  test('Ab major scale, per 4tth', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('Ab'),
      MusicInterval.PER_4TH
    );
    expect(note.displayName).toBe('Db');
  });

  test('Db major scale, dim 5th', () => {
    const note =  MusicNote.getForInterval(
      MusicNote.instance('Db'),
      MusicInterval.DIM_5TH
    );
    expect(note.displayName).toBe('Abb');
  });

});
