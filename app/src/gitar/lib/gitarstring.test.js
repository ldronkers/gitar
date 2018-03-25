import MusicNote from './musicnote';
import GitarString from './gitarstring';

test('test get string notes', () => {
  const string = new GitarString(MusicNote.instance('E'));

  expect(string.getNotes('sharps')[0].name).toBe('F')
  expect(string.getNotes('sharps')[1].displayName).toBe('F#')
});

test('test get string notes flat', () => {
  const string = new GitarString(MusicNote.instance('E'));

  expect(string.getNotes('flats')[0].name).toBe('F')
  expect(string.getNotes('flats')[1].displayName).toBe('Gb')
});

test('', () => {

});
