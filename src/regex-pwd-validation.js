/**
 * @description
 * Regex that will validate a password to make sure it meets the following criteria:
 *
 * - At least six characters long
 * - contains a lowercase letter
 * - contains an uppercase letter
 * - contains a number
 *
 * Valid passwords will only be alphanumeric characters.
 *
 * @external Codewars
 * @see https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
 *
 * @param {String} pwd
 * @return {Boolean} check pwd by regexp
 */

function validate (pwd) {
  let pattern = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/)
  return pattern.test(pwd)
}
