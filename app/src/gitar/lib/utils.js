/**
*  Imagine an array with values: abcdefg
*  go round() gets all of them from any given point
*
*  Example:
*  input = [a, b, c, d, e, f, g]
*  from point 'c', it will return [c, d, e, f, g, a, b]
*
*  @values the array to goround
*  @position the index position to start from
*/
export function goRound(values = [], position) {
  const max = values.length;
  if (position >= 0 && position <= max) {
    return position > 0 ? values.slice(position, max + 1).concat(values.slice(0, position)) : values;
  } else {
    throw new Error('Position not in bounds (min:1, max: index+1)');
  }
}
