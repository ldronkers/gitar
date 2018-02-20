import React from 'react';
import { MenuItem, ScalesMenuItem, IntervalsMenuItem } from './control'

test('get type', () => {
  const item = new MenuItem('scale');
  expect(item.type).toBe('scale')
});

test('get type for subclass', () => {
  const scalesItem = new ScalesMenuItem();
  expect(scalesItem.type).toBe(MenuItem.TYPE_SCALE);
});

test('get selection', () => {
  const selection = {name: 'Ionian'};
  const scalesItem = new ScalesMenuItem(selection);
  expect(scalesItem.selection).toBe(selection);
});

test('get selection for intervals', () => {
  const selection = {name: 'Ionian'};
  const intervalsItem = new IntervalsMenuItem(selection);
  expect(intervalsItem.selection).toBe(selection);
});
