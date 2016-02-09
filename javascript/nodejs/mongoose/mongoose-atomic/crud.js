require('./db/config');
const mongoose = require('mongoose');
const Schema = require('./schema');
const Model = require('./model')('User', Schema);

const CRUD = {
  create: () => {}
, retrieve: () => {}
, update: () => {}
, delete: () => {}
}

module.exports = CRUD;
