/**
 * Given the string representations of two integers,
 * return the string representation of the sum of those integers.
 * 
 * @param {String}
 * @param {String}
 * @returns {String}
 * 
 * A string representation of an integer
 * will contain no characters
 * besides the ten numerals "0" to "9".
 * 
 * It must return the display text as shown in the examples:
 * 
 * @example sumStrings('1','2')
 * // returns '3'
 * sumStrings('1', '2') // => '3'
 */

function sumStrings (a, b) {
  let zeroStartPattern = /^0+/

  a = a.replace(zeroStartPattern, '')
  b = b.replace(zeroStartPattern, '')

  if (a.length > b.length) {
    b = b.padStart(a.length, 0)
  }
  else if (b.length > a.length) {
    a = a.padStart(b.length, 0)
  }
  
  let prefix = 0
  let i = a.length
  let len = i
  let result = new Array(i)

  while (i--) {
    let n = String(Number(a[i]) + Number(b[i]) + prefix)

    prefix = (n[1]) ? 1 : 0
    result[i] = n[1] || n[0]
    
    if (i === 0 && prefix) {
      result.unshift(prefix)
    }
  }

  return result.join('')
}
