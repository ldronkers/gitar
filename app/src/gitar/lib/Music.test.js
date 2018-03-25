import Music from './music.js';
import MusicNote from './musicnote.js';
import MusicInterval from './musicinterval.js';

test('get name', () => {
  const note = MusicNote.instance('D');
  expect(note.name).toEqual('D')
});
