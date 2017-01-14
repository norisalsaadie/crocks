/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../helpers/curry')
const isFunction = require('../predicates/isFunction')

// Substitution (Starling)
// (a -> b -> c) -> (a -> b) -> a -> c
function substitution(f, g, x) {
  if(!isFunction(f) || !isFunction(g)) {
    throw new TypeError('substitution: Functions required for first two arguments')
  }

  return curry(f)(x, g(x))
}

module.exports = curry(substitution)
