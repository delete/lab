module.exports = (ModelName, Schema) => {
  const mongoose = require('mongoose');
  return mongoose.model(ModelName, Schema);
}
