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

function likes(names) {
  names = (names.length) ? names : ['no one']
  let [a, b, c, ...others] = names
  switch (names.length) {
    case 1: return `${ a } likes this`
    case 2: return `${ a } and ${ b } like this`
    case 3: return `${ a }, ${ b } and ${ c } like this`
    default: return `${ a }, ${ b } and ${ others.length + 1 } others like this`
  }
}
