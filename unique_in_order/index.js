/**
 * Implement the function unique_in_order
 * which takes as argument a sequence
 * and returns a list of items without any elements
 * with the same value next to each other
 * and preserving the original order of elements.
 * 
 * @param {String, Array}
 * @returns {Array}
 * 
 * @example
 * // returns ['A', 'B', 'C', 'D', 'A', 'B']
 * unique_in_order('AAAABBBCCDAABBB')
 */

function unique_in_order(iterable) {
  return [...iterable].filter((n, i, arr) => arr[i - 1] !== n)
}
