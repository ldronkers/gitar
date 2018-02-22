import React from 'react';
import { Music, MusicNote, MusicInterval, MusicScale } from './music'

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

test('get scale Ionian', () => {
  const expectedScale = {name: 'Ionian', intervals: MusicScale.MODE_IONIAN.intervals}
  const scale = MusicScale.getScale('Ionian');
  expect(scale).toEqual(expectedScale);
});

test('get name', () => {
  const note = MusicNote.getNote('D');
  expect(note.name).toEqual('D')
});

test('get interval notes', () => {
  const music = new Music(MusicNote.getNotes());
  const intervals = [MusicInterval.PER_4TH, MusicInterval.PER_5TH];
  const expectedNotes = [
    MusicNote.getNote('A'), MusicNote.getNote('B')
  ];
  expect(
    music.getIntervalNotes(MusicNote.getNote('E'), intervals)
  ).toEqual(expectedNotes)
});
