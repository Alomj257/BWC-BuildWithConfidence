const mongoose = require('mongoose');

const tradePersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const TradePerson = mongoose.model('TradePerson', tradePersonSchema);

module.exports = TradePerson;
