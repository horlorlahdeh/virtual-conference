const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
  name: String,
  website: String,
  icon: String,
});

const SponsorModel = mongoose.model('sponsor', SponsorSchema);

module.exports = SponsorModel;
