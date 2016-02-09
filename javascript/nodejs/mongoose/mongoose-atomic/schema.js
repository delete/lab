'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://');

const userSchema =  new Schema({
  name: require('./fields/field-name')
, password: require('./fields/field-password')
, email: require('./fields/field-email')
, type: require('./fields/field-type')
, created_at: require('./fields/field-created_at')
});

module.exports = new Schema(userSchema);
