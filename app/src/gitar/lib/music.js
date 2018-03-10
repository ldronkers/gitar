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
      result.push(this.getIntervalNote(note, interval))
    ));
    return result;
  }

  /**
  * Get the interval note in relation to the selected note
  *
  * examples:
  * +4==3rd
  * +3==b3rd
  * +7==5th
  * See MusicInterval
  */
  getIntervalNote(note, interval) {
    const index = this.getIndex(note.id + interval.semitones)
    return this.notes[index]
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

  getIndex(desiredIndex) {
    const highestIndex = this.notes.length -1;
    if (desiredIndex > highestIndex) {
      const beginninIndex = (desiredIndex - highestIndex) -1
      return beginninIndex // go round the other way, from the start
    }
    return desiredIndex;
  }
}

export default Music;
