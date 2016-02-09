'use strict';

const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3

const Field = {
  type: String
, set: _set
, validate: [_validate, 'Email({VALUE}) inválido.']
, required: true
}

module.exports = Field;
