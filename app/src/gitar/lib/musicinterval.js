class MusicInterval {
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

  static MAJOR_SCALE = [
    MusicInterval.PER_UNI,
    MusicInterval.MAJ_2ND,
    MusicInterval.MAJ_3RD,
    MusicInterval.PER_4TH,
    MusicInterval.PER_5TH,
    MusicInterval.MAJ_6TH,
    MusicInterval.MAJ_7TH
  ];

  static NATURAL_MINOR_SCALE = [
    MusicInterval.PER_UNI,
    MusicInterval.MAJ_2ND,
    MusicInterval.MIN_3RD,
    MusicInterval.PER_4TH,
    MusicInterval.PER_5TH,
    MusicInterval.MIN_6TH,
    MusicInterval.MIN_7TH
  ];

  static MODE_INTERVALS = [
    MusicInterval.PER_UNI,
    MusicInterval.MAJ_2ND,
    MusicInterval.MAJ_3RD,
    MusicInterval.PER_4TH,
    MusicInterval.PER_5TH,
    MusicInterval.MAJ_6TH,
    MusicInterval.MAJ_7TH
  ]

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

export default MusicInterval;
