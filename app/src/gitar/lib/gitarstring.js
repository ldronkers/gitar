import MusicNote from './musicnote';
import { goRound } from './utils';

class GitarString {
  constructor(note) {
    this.note = note;
  }

  getNotes(type) {
    const flats = MusicNote.INTERVAL_NOTES_FLAT;
    const sharps = MusicNote.INTERVAL_NOTES_SHARP;
    const notes = type ==='flats' ? flats : sharps;
    const position = notes.indexOf(this.note.name);
    const orderedNotes = goRound(notes, position);

    let result = [];
    for (let noteName of orderedNotes){
      result.push(MusicNote.instance(noteName));
    }

    result = result.slice(1).concat(result[0])
    return result;
  }
}

export default GitarString;
