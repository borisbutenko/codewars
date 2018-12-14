/**
 * You might know some pretty large perfect squares.
 * But what about the NEXT one?
 * Complete the findNextSquare method that finds the next integral
 * perfect square after the one passed as a parameter.
 * Recall that an integral perfect square is an integer n such that
 * sqrt(n) is also an integer.
 * If the parameter is itself not a perfect square, than -1 should
 * be returned. You may assume the parameter is positive.
 * 
 * @param {Number}
 * @returns {Number}
 * 
 * @example
 * // returns 144
 * find_next_square(121)
 * 
 * @example
 * // returns -1 since 114 is not a perfect
 * find_next_square(114)
 */

function find_next_square(sq) {
  let sqrt = Math.sqrt(sq)
  return (sqrt ^ 0) === sqrt ? Math.pow(++sqrt, 2) : -1
  // --- other solution
  // let sqrt = Math.sqrt(sq)
  // return Number.isInteger(sqrt) ? Math.pow(++sqrt, 2) : -1
}
