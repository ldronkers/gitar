import Music from './music.js';
import MusicNote from './musicnote.js';
import MusicInterval from './musicinterval.js';
import MusicScale from './musicscale.js';

test('get scale Ionian', () => {
  const expectedScale = {name: 'Ionian', intervals: MusicScale.MODE_IONIAN.intervals}
  const scale = MusicScale.getScale('Ionian');
  expect(scale).toEqual(expectedScale);
});

test('get name', () => {
  const note = MusicNote.instance('D');
  expect(note.name).toEqual('D')
});

test('get interval notes', () => {
  const music = new Music(MusicNote.getNotes());
  const intervals = [MusicInterval.PER_4TH, MusicInterval.PER_5TH];
  const expectedNotes = [
    MusicNote.instance('A'), MusicNote.instance('B')
  ];
  expect(
    music.getIntervalNotes(MusicNote.instance('E'), intervals)
  ).toEqual(expectedNotes)
});
