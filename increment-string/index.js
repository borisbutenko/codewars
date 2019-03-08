/**
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number the number 1 should be appended to the new string.
 *
 * Attention: If the number has leading zeros the amount of digits should be considered.
 * 
 * @param {String} string
 * @returns {String}
 * 
 * It must return the display text as shown in the examples:
 * 
 * @example
 * // returns "foobar001"
 * incrementString('foobar000')
 * 
 * @example
 * // returns 'foo1'
 * incrementString('foo')
 * 
 * @example
 * incrementString('foobar99')
 * // returns 'foobar100'
 */

function incrementString (string) {
  let number = string.match(/\d+$/)
  if (!number) return string + 1
  number = number[0]
  return string.replace(/\d+$/, String(Number(number) + 1).padStart(number.length, '0'))
}
