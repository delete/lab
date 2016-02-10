'use strict';

const Atom = {
  type: String
, get: require('./quark-toUpper')
, set: require('./quark-toLower')
, validate: [require('./quark-validade-string-lengthGTE3'), 'Name precisa ser maior que 3']
, required: true
, index: true
}

module.exports = Atom;
