import React from 'react';
import Guitar from './guitar'
import { Note } from './guitar'
import MusicInterval from './musicinterval';

test('get note', () => {
  const notes = [
    {name: 'B#', note: new Note(0, 'C', 'B#')},
    {name: 'F##', note: new Note(7, 'G', 'F##')},
    {name: 'E#', note: new Note(5, 'F', 'E#')},
    {name: 'Abb', note: new Note(7, 'G', 'Abb')}
  ];

  for (let i = 0; i < notes.length; i++) {
    expect(Note.instance(notes[i].name)).toEqual(notes[i].note);
  }
});

test('get display name', () => {
  const notes = [
    {name: 'B#', note: new Note(0, 'C', 'B#')},
    {name: 'F##', note: new Note(7, 'G', 'F##')},
    {name: 'E#', note: new Note(5, 'F', 'E#')},
    {name: 'Abb', note: new Note(7, 'G', 'Abb')}
  ];

  for (let i = 0; i < notes.length; i++) {
    expect(Note.instance(notes[i].name).displayName).toEqual(notes[i].note.displayName);
  }
});

test('getNotes', () => {
  const notes = Guitar.getNotes();
  expect(notes[0]).toEqual(new Note(0, 'C'));
});

test('getScale', () => {
  const guitar = new Guitar();
  const note = Note.instance('B');
  //const scale = guitar.getScale(note, MusicInterval.MAJOR_SCALE)
  const scale = guitar.getScale(note, MusicInterval.NATURAL_MINOR_SCALE)
  console.log(scale);
  expect().toEqual();
});

test('', () => {
  const guitar = new Guitar();
  expect().toEqual();
});
