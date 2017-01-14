/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const combinators = {
  applyTo: require('./combinators/applyTo'),
  composeB: require('./combinators/composeB'),
  constant: require('./combinators/constant'),
  flip: require('./combinators/flip'),
  identity: require('./combinators/identity'),
  reverseApply: require('./combinators/reverseApply'),
  substitution: require('./combinators/substitution')
}

const crocks = {
  Arrow: require('./crocks/Arrow'),
  Const: require('./crocks/Const'),
  Either: require('./crocks/Either'),
  Identity: require('./crocks/Identity'),
  IO: require('./crocks/IO'),
  List: require('./crocks/List'),
  Maybe: require('./crocks/Maybe'),
  Pair: require('./crocks/Pair'),
  Pred: require('./crocks/Pred'),
  Reader: require('./crocks/Reader'),
  Star: require('./crocks/Star'),
  State: require('./crocks/State'),
  Unit: require('./crocks/Unit'),
  Writer: require('./crocks/Writer')
}

const helpers = {
  branch: require('./helpers/branch'),
  compose: require('./helpers/compose'),
  curry: require('./helpers/curry'),
  curryN: require('./helpers/curryN'),
  ifElse: require('./helpers/ifElse'),
  liftA2: require('./helpers/liftA2'),
  liftA3: require('./helpers/liftA3'),
  mconcat: require('./helpers/mconcat'),
  mconcatMap: require('./helpers/mconcatMap'),
  mreduce: require('./helpers/mreduce'),
  mreduceMap: require('./helpers/mreduceMap'),
  not: require('./helpers/not'),
  pipe: require('./helpers/pipe'),
  safe: require('./helpers/safe'),
  tryCatch: require('./helpers/tryCatch'),
  unless: require('./helpers/unless'),
  when: require('./helpers/when')
}

const monoids = {
  All: require('./monoids/All'),
  Any: require('./monoids/Any'),
  Assign: require('./monoids/Assign'),
  Min: require('./monoids/Min'),
  Max: require('./monoids/Max'),
  Prod: require('./monoids/Prod'),
  Sum: require('./monoids/Sum')
}

const pointFree = {
  ap: require('./pointfree/ap'),
  bimap: require('./pointfree/bimap'),
  chain: require('./pointfree/chain'),
  coalesce: require('./pointfree/coalesce'),
  concat: require('./pointfree/concat'),
  cons: require('./pointfree/cons'),
  contramap: require('./pointfree/contramap'),
  evalWith: require('./pointfree/evalWith'),
  execWith: require('./pointfree/execWith'),
  either: require('./pointfree/either'),
  filter: require('./pointfree/filter'),
  fst: require('./pointfree/fst'),
  head: require('./pointfree/head'),
  log: require('./pointfree/log'),
  map: require('./pointfree/map'),
  maybe: require('./pointfree/maybe'),
  merge: require('./pointfree/merge'),
  option: require('./pointfree/option'),
  promap: require('./pointfree/promap'),
  read: require('./pointfree/read'),
  reduce: require('./pointfree/reduce'),
  run: require('./pointfree/run'),
  runWith: require('./pointfree/runWith'),
  sequence: require('./pointfree/sequence'),
  snd: require('./pointfree/snd'),
  swap: require('./pointfree/swap'),
  tail: require('./pointfree/tail'),
  traverse: require('./pointfree/traverse'),
  value: require('./pointfree/value')
}

const predicates = {
  isApplicative: require('./predicates/isApplicative'),
  isApply: require('./predicates/isApply'),
  isArray: require('./predicates/isArray'),
  isEmpty: require('./predicates/isEmpty'),
  isFunction: require('./predicates/isFunction'),
  isFunctor: require('./predicates/isFunctor'),
  isMonoid: require('./predicates/isMonoid'),
  isNil: require('./predicates/isNil'),
  isNumber: require('./predicates/isNumber'),
  isObject: require('./predicates/isObject'),
  isSemigroup: require('./predicates/isSemigroup'),
  isString: require('./predicates/isString'),
}

module.exports = Object.assign(
  {},
  combinators,
  crocks,
  helpers,
  monoids,
  pointFree,
  predicates
)
