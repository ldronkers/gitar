import React from 'react';
import { Music, MusicNote, MusicInterval } from './music'

test('test get interval note', () => {
  var notes = MusicNote.getNotes()
  const music = new Music(notes);
  const interval = MusicInterval.PER_5TH;

  expect(
    music.getIntervalNote(
      notes[MusicNote.E], interval
    )).toBe(notes[11]);
});

test('get index with index in range', () => {
  const notes = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11];
  const music = new Music(notes);
  expect(music.getIndex(3)).toBe(3)
});

/**
* Get the Major7th (11 semitones) for A(9):
* A/9 + Maj7th/11 = 20
*/
test('get index with index out of bounds', () => {
  const notes = [0, 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11];
  const music = new Music(notes);
  expect(music.getIndex(20)).toBe(8)
});
