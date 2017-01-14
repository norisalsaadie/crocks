/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../helpers/curry')

const isFunction = require('../predicates/isFunction')

function reduce(fn, init, m) {
  if(!isFunction(fn)) {
    throw new TypeError('reduce: Function required for first argument')
  }
  else if(!(m && isFunction(m.reduce))) {
    throw new TypeError('reduce: Foldable required for third argument')
  }

  return m.reduce(fn, init)
}

module.exports = curry(reduce)
