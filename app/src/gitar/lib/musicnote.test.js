import MusicNote from './musicnote';

test('is signed', () => {
  const note = new MusicNote('Ab');
  expect(note.isSigned).toEqual(true);
});

test('is signed without sign', () => {
  const note = new MusicNote('A');
  expect(note.isSigned).toEqual(false);
});

test('is flat', () => {
  const note = new MusicNote('Ab');
  expect(note.isFlat).toEqual(true);
});

test('is sharp', () => {
  const note = new MusicNote('C#');
  expect(note.isSharp).toEqual(true);
});

test('is named in context', () => {
  const note = new MusicNote('C#');
  expect(note.name).toEqual('Db');
  expect(note.contextName).toEqual('C#');
});

test('is sharp without signed note', () => {
  const note = new MusicNote('C');
  expect(note.isSharp).toEqual(false);
});

test('get unsigned name', () => {
  const note = new MusicNote('C#');
  expect(note.unsignedName).toEqual('C');
});
