/**
 * @description
 * Complete the function/method so that
 * it takes CamelCase string and returns
 * the string in snake_case notation.
 * Lowercase characters can be numbers.
 * If method gets number, it should return string.
 *
 * @example
 * toUnderscore('TestController')
 * // returns "test_controller"
 *
 * @example
 * toUnderscore(1)
 * // returns 1
 *
 * @param {String} str
 * @return {String}
 */

function toUnderscore (str) {
  if (typeof str === 'number') {
    return str.toString()
  }
  return str.split(/(?=[A-Z])/).join('_').toLowerCase()
}
