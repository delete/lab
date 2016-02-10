module.exports = (OrganismName, Molecule) => {
  const mongoose = require('mongoose');
  return mongoose.model(OrganismName, Molecule);
}
