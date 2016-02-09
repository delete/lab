'use strict';

const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length >= 6 v.length <= 10

const Field = {
  type: String
//, get: _get
//, set: _set
, validate: [_validate, 'Password precisa ser maior igual a 6 ou menor igual a 10']
, required: true
}

module.exports = Field;
