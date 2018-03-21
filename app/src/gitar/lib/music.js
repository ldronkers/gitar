class Music {

  constructor(notes) {
    this.notes = notes;
  }

  /**
  * Get the interval notes in relation to the selected note
  */
  getIntervalNotes(note, intervals) {
    const result = []
    intervals.map((interval, index) => (
      result.push(note.getInterval(interval))
    ));
    return result;
  }

  /**
  * Get notes for string E (index)
  * But as string start with the followin (E => F)
  * the first element is 'sliced'
  */
  getStringNotes(index) {
    const keyNnotes = this.notes.slice(index, 12)
    const prependingNotes = this.notes.slice(0, index)
    const notes = keyNnotes.concat(prependingNotes, [this.notes[index]])
    return notes.slice(1);
  }
}

export default Music;
