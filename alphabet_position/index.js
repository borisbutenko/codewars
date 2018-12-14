/**
 * In this kata you are required to,
 * given a string, replace every letter
 * with its position in the alphabet.
 * If anything in the text isn't a letter,
 * ignore it and don't return it.
 * 
 * @param {String}
 * @returns {String} 
 * 
 * @example
 * // returns "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 * alphabet_position("The sunset sets at twelve o' clock.")
 */

function generate_char_array(char_1 = 'a', char_2 = 'z') {
  let [start, end] = [char_1.charCodeAt(0), char_2.charCodeAt(0)]
  let length = (end - start + 1)
  return Array
    .apply(null, Array(length))
    .map(_ => String.fromCharCode(start++))
}

function alphabet_position(value) {
  let alphabet = generate_char_array()
  let positions = []
  for (let char of value.toLowerCase()) {
    let position = alphabet.indexOf(char)
    if (~position) {
      positions.push(position + 1)
    }
  }
  return positions.join(' ')
  // --- other solutions:
  // return [...value.toLowerCase()].reduce((positions, char) => {
  //   let position = alphabet.indexOf(char)
  //   if (~position) {
  //     positions.push(position + 1)
  //   }
  //   return positions
  // }, []).join(' ')
  // ---
  // return [...value.toLowerCase()]
  //   .map(char => alphabet.indexOf(char) + 1)
  //   .filter(Boolean)
  //   .join(' ')
  // ---
  // return [...value.toLowerCase()]
  //   .filter(char => ~alphabet.indexOf(char))
  //   .map(char => alphabet.indexOf(char) + 1)
  //   .join(' ')
}
