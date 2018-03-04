import MusicNote from './musicnote.js';
import MusicScale from './musicscale.js';
import MusicInterval from './musicinterval.js';

test('get notes from intervals', () => {
  const note = new MusicNote('Gb');
  const scale = new MusicScale(note, MusicInterval.MAJOR_SCALE);
  // const notes = scale.getNotesFromIntervals();
  // todo implement
});
