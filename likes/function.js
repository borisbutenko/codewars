/**
 * You probably know the "like" system from Facebook and other pages.
 * People can "like" blog posts, pictures or other items.
 * We want to create the text that should be displayed next to such an item.
 * Implement a function likes :: [String] -> String,
 * which must take in input array, containing the names of people who like an item.
 * 
 * @param {array}
 * @returns {string}
 * 
 * It must return the display text as shown in the examples:
 * 
 * @example likes []
 * // returns "no one likes this"
 * likes([])
 * 
 * @example
 * // returns "Peter likes this"
 * likes(["Peter"])
 * 
 * @example
 * // returns "Jacob and Alex like this"
 * likes(["Jacob", "Alex"])
 * 
 * @example
 * likes(["Max", "John", "Mark"])
 * // returns "Max, John and Mark like this"
 * 
 * @example
 * likes(["Alex", "Jacob", "Mark", "Max"])
 * // returns "Alex, Jacob and 2 others like this"
 */

export default function likes(array) {
  if (!Array.isArray(array)) {
    throw 'Names must be an array.'
  }

  let length = array.length
  let ending = (length <= 1) ? 'likes this' : 'like this'

  switch (length) {
    case 0:
      return `no one ${ ending }`
    case 1:
      return `${ array[0] } ${ ending }`
    case 2:
      return `${ array.join(' and ') } ${ ending }`
    case 3:
      return `${ array.shift() }, ${ array.join(' and ') } ${ ending }`
    default:
      let [first, second] = array
      return `${ first }, ${ second } and ${ length - 2 } others ${ ending }`
  }
}
