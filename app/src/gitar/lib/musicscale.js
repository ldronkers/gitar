import MusicInterval from './musicinterval';

class MusicScale {

  static MODE_IONIAN = {
    name: 'Ionian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_2ND,
      MusicInterval.MAJ_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MAJ_6TH,
      MusicInterval.MAJ_7TH
    ]
  };

  static MODE_DORIAN = {
    name: 'Dorian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_2ND,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MAJ_6TH,
      MusicInterval.MIN_7TH
    ]
  };

  static MODE_PRYGIAN = {
    name: 'Prygian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MIN_2ND,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MIN_6TH,
      MusicInterval.MIN_7TH
    ]
  };

  static MODE_LYDIAN = {
    name: 'Lydian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_2ND,
      MusicInterval.MAJ_3RD,
      MusicInterval.AUG_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MAJ_6TH,
      MusicInterval.MAJ_7TH
    ]
  };

  static MODE_MIXOLYDIAN = {
    name: 'Mixolydian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_2ND,
      MusicInterval.MAJ_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MAJ_6TH,
      MusicInterval.MIN_7TH
    ]
  };

  static MODE_AEOLIAN = {
    name: 'Aolian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_2ND,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.PER_5TH,
      MusicInterval.MIN_6TH,
      MusicInterval.MIN_7TH
    ]
  };

  static MODE_LOCRIAN = {
    name: 'Locrian',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MIN_2ND,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_4TH,
      MusicInterval.DIM_5TH,
      MusicInterval.MIN_6TH,
      MusicInterval.MIN_7TH
    ]
  };

  static MAJOR = {
    name: 'Major',
    intervals: MusicScale.MODE_IONIAN.intervals
  }

  static NATURAL_MINOR = {
    name: 'Natural minor',
    intervals: MusicScale.MODE_AEOLIAN.intervals
  }

  static MAJ_TRIAD = {
    name: 'Major triad',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_3RD,
      MusicInterval.PER_5TH
    ]
  };

  static MIN_TRIAD = {
    name: 'Minor triad',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_5TH
    ]
  };

  static DIM_TRIAD = {
    name: 'Diminished triad',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MIN_3RD,
      MusicInterval.DIM_5TH
    ]
  };

  static MAJ_ARPEGGIO = {
    name: 'Major arpeggio',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_3RD,
      MusicInterval.PER_5TH
    ]
  };

  static MAJ_7TH_ARPEGGIO = {
    name: 'Major seventh',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MAJ_3RD,
      MusicInterval.PER_5TH,
      MusicInterval.MAJ_7TH
    ]
  };

  static MIN_7TH_ARPEGGIO = {
    name: 'Min seventh',
    intervals: [
      MusicInterval.PER_UNI,
      MusicInterval.MIN_3RD,
      MusicInterval.PER_5TH,
      MusicInterval.MIN_7TH
    ]
  };

  static getTriads() {
    return [
      MusicScale.MAJ_TRIAD,
      MusicScale.MIN_TRIAD,
      MusicScale.DIM_TRIAD
    ];
  }

  static getScales() {
    return [
      MusicScale.MAJOR,
      MusicScale.NATURAL_MINOR,
    ];
  }

  static getModes() {
    return [
      MusicScale.MODE_IONIAN,
      MusicScale.MODE_DORIAN,
      MusicScale.MODE_PRYGIAN,
      MusicScale.MODE_LYDIAN,
      MusicScale.MODE_MIXOLYDIAN,
      MusicScale.MODE_AEOLIAN,
      MusicScale.MODE_LOCRIAN
    ];
  }

  static getArpeggios() {
    return [
      MusicScale.MAJ_ARPEGGIO,
      MusicScale.MAJ_7TH_ARPEGGIO,
      MusicScale.MIN_7TH_ARPEGGIO
    ]
  }

  static getScale(name){
    let scales = MusicScale.getScales();
    scales = scales.concat(MusicScale.getModes());
    scales = scales.concat(MusicScale.getTriads());
    scales = scales.concat(MusicScale.getArpeggios());
    const length = scales.length;
    for (let i = 0; i < length; i++) {
      if (scales[i].name === name) {
        return scales[i];
      }
    }
  }
}

export default MusicScale;
