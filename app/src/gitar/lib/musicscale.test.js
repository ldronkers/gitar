import MusicScale from './musicscale.js';

test('get scale Ionian', () => {
  const expectedScale = {name: 'Ionian', intervals: MusicScale.MODE_IONIAN.intervals}
  const scale = MusicScale.getScale('Ionian');
  expect(scale).toEqual(expectedScale);
});
