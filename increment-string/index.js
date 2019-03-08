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

  string = string.replace(/\d+$/, '')
  number = number[0]

  let result = Number(number)
  let increment = result + 1

  let zeroes = number.match(/^0+/)
  if (!zeroes) return string + increment

  zeroes = zeroes[0]

  let resultWithZeroes = String(increment).padStart((zeroes + increment).length, '0')

  if (String(increment).length > String(result).length || zeroes.length === number.length) {
    return string + resultWithZeroes.slice(1)
  }

  return string + resultWithZeroes
}
