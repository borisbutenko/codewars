/**
 * @see https://www.codewars.com/kata/578bf2d8daa01a4ee8000046
 */

function encode (str) {
    return str.replace(/(\w)\1*/g, chars => chars.length + chars[0])
}

function decode (str) {
    return str.replace(/\d+\w/g, chars => chars[chars.length - 1].repeat(parseInt(chars, 10)))
}

/**
 * @see https://www.codewars.com/kata/546dba39fa8da224e8000467
 */

function encode_list (str) {
    return (str.match(/(.)\1*/g) || []).map(chars => [chars.length, chars[0]])
}
