/**
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas
 * except for the last two names, which should be separated by an ampersand.
 *
 * @param {Array} names
 * @return {String}
 *
 * @example
 * // returns 'Bart, Lisa & Maggie'
 * list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
 */

function list (names) {
  return names
    .map(({ name }) => name)
    .join(', ')
    .replace(/,(?!.*,)/gmi, ' &')
}
