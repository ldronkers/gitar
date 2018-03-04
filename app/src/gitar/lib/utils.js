/**
*  Imagine an array with values: abcdefg
*  go round() gets all of them from any given point
*
*  Example:
*  input = [a, b, c, d, e, f, g]
*  from point 'c', it will return [d, e, f, g, a, b, c]
*
*  @values the array to goround
*  @position the position to start from. Note this is not the
*            index but as we see it (index+1)
*
*/
export function goRound(values = [], position) {
  const index = position -1;
  const max = values.length;
  if (index >= 0 && index <= max) {
    return index > 0 ? values.slice(index, max + 1).concat(values.slice(0, index)) : values;
  } else {
    throw 'Position not in bounds (min:1, max: index+1)';
  }
}
