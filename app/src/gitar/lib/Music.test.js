import React from 'react';
import { Music, MusicNote, MusicInterval } from './music'

test('get index with index in range', () => {
  var notes = MusicNote.getNotes()
  const music = new Music(notes);
  const interval = MusicInterval.PER_5TH;

  expect(
    music.getIntervalNote(
      notes[MusicNote.E], interval
    )).toBe(notes[11]);
});
