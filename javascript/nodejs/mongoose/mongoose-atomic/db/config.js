'use strict';

const mongoose = require('mongoose');
const URI = 'mongodb://';

mongoose.connect(URI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection connected to' + URI);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});
