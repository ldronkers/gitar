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
      result.push(note.getNote(interval))
    ));
    return result;
  }
}

export default Music;
