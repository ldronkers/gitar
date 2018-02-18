function MusicNote(id, name, pitch = '', display_name = '') {
  this.id = id;
  this.name = name;
  this.pitch = pitch;
  this.display_name = display_name ? display_name : name;
}

new MusicNote(1, 'c'),
new MusicNote(1, 'd', 'flat'),
new MusicNote(2, 'd'),
new MusicNote(3, 'e', 'flat'),
new MusicNote(4, 'e'),
new MusicNote(5, 'f'),
new MusicNote(6, 'g', 'flat'),
new MusicNote(7, 'g'),
new MusicNote(8, 'a', 'flat'),
new MusicNote(9, 'a'),
new MusicNote(10, 'b', 'flat'),
new MusicNote(11, 'b')

var notes = [
  'c',
  'c#',
  'd',
  'd#',
  'e',
  'f',
  'f#',
  'g',
  'g#',
  'a',
  'a#',
  'b']
this.notes = notes;
