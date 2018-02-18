export class Music {

  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  set notes(notes) {
    this._notes = notes
  }

  getIndex(desiredIndex) {
    const highestIndex = this._notes.length -1;
    if (desiredIndex > highestIndex) {
      const beginninIndex = (desiredIndex - highestIndex) -1
      return beginninIndex // go round the other way, fromthe start
    }
    return desiredIndex;
  }

  /**
  * Get the interval in relation to the selected note
  *
  * examples:
  * +4==3rd
  * +3==b3rd
  * +7==5th
  * See MusicInterval
  */
  getInterval(note, semitones) {
    const index = this.getIndex(note.id + semitones)
    return this._notes[index]
  }

  getStringNotes(index) {
    const start_notes = this._notes.slice(index, 12)
    const following_notes = this._notes.slice(0, index)
    return start_notes.concat(following_notes)
  }
}

export class MusicNote {
  static E = '4';
  static B = '11';
  static G = '7';
  static D = '2';
  static A = '9';

  static getNotes() {
     return [
        {minute: 0, id: 0, name: 'C', displayName: 'C', class: ''},
        {minute: 7, id: 1, name: 'Db', displayName: 'C#/Db', class: ''},
        {minute: 2, id: 2, name: 'D', displayName: 'D', class: ''},
        {minute: 9, id: 3, name: 'Eb', displayName: 'D#/Eb', class: ''},
        {minute: 4, id: 4, name: 'E', displayName: 'E', class: ''},
        {minute: 11, id: 5, name: 'F', displayName: 'F', class: ''},
        {minute: 6, id: 6, name: 'Gb', displayName: 'F#/Gb', class: ''},
        {minute: 1, id: 7, name: 'G', displayName: 'G', class: ''},
        {minute: 8, id: 8, name: 'Ab', displayName: 'G#/Ab', class: ''},
        {minute: 3, id: 9, name: 'A', displayName: 'A', class: ''},
        {minute: 10, id: 10, name: 'Bb', displayName: 'A#/Bb', class: ''},
        {minute: 5, id: 11, name: 'B', displayName: 'B', class: ''}
    ];
  }
}

export class MusicInterval {
  static PER_UNI = {semitones: 0, name: 'Perfect uninison', shortName: '1st'};
  static AUG_UNI = {semitones: 1, name: 'Augmented uninison', shortName: '#1'};

  static MIN_2ND = {semitones: 1, name: 'Minor second', shortName: 'b2'};
  static MAJ_2ND = {semitones: 2, name: 'Major second second',shortName: '2nd'};
  static AUG_2ND = {semitones: 3, name: 'Augmented second', shortName: '#2'};

  static DIM_3RD = {semitones: 2, name: 'Diminished third', shortName: 'bb3'};
  static MIN_3RD = {semitones: 3, name: 'Minor third', shortName: 'b3'};
  static MAJ_3RD = {semitones: 4, name: 'Major third', shortName: '3rd'};
  static AUG_3RD = {semitones: 5, name: 'Augmented third', shortName: '#3'};

  static DIM_4TH = {semitones: 4, name: 'Diminished fourth', shortName: 'b4'};
  static PER_4TH = {semitones: 5, name: 'Perfect fourth', shortName: '4th'};
  static AUG_4TH = {semitones: 6, name: 'Augmented fourth', shortName: '#4'};

  static DIM_5TH = {semitones: 6, name: 'Diminished fifth', shortName: 'b5'};
  static PER_5TH = {semitones: 7, name: 'Perfect fifth', shortName: '5th'};
  static AUG_5TH = {semitones: 8, name: 'Augmented fifth', shortName: '#5'};

  static DIM_6TH = {semitones: 7, name: 'Diminished sixth', shortName: 'bb6'};
  static MIN_6TH = {semitones: 8, name: 'Minor sixth', shortName: 'b6'};
  static MAJ_6TH = {semitones: 9, name: 'Major sixth', shortName: '6th'};
  static AUG_6TH = {semitones: 10, name: 'Augmented sixth', shortName: '6#'};

  static DIM_7TH = {semitones: 9, name: 'Diminished seventh', shortName: 'bb7'};
  static MIN_7TH = {semitones: 10, name: 'Minor seventh', shortName: 'b7'};
  static MAJ_7TH = {semitones: 11, name: 'Major seventh', shortName: '7th'};
  static AUG_7TH = {semitones: 12, name: 'Augmented seventh', shortName: 'Oct'};

  static getIntervals() {
    return [
      MusicInterval.PER_UNI,
      MusicInterval.AUG_UNI,
      MusicInterval.MIN_2ND,
      MusicInterval.MAJ_2ND,
      MusicInterval.AUG_2ND,
      MusicInterval.DIM_3RD,
      MusicInterval.MIN_3RD,
      MusicInterval.MAJ_3RD,
      MusicInterval.AUG_3RD,
      MusicInterval.DIM_4TH,
      MusicInterval.PER_4TH,
      MusicInterval.AUG_4TH,
      MusicInterval.DIM_5TH,
      MusicInterval.PER_5TH,
      MusicInterval.AUG_5TH,
      MusicInterval.DIM_6TH,
      MusicInterval.MIN_6TH,
      MusicInterval.MAJ_6TH,
      MusicInterval.AUG_6TH,
      MusicInterval.DIM_7TH,
      MusicInterval.MIN_7TH,
      MusicInterval.MAJ_7TH,
      MusicInterval.AUG_7TH
    ]
  }
}
