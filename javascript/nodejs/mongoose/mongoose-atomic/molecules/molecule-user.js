'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule =  new Schema({
  name: require('./atom/atom-name')
, password: require('./atom/atom-password')
, email: require('./atom/atom-email')
, type: require('./atom/atom-type')
, created_at: require('./atom/atom-created_at')
});

module.exports = new Schema(Molecule);
