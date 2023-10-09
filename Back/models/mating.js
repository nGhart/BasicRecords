const mongoose = require('mongoose');

const matingSchema = new mongoose.Schema({
  matingDoe: {
    type: String,
    required: true,
  },
  matingBuck: {
    type: String,
    required: true,
  },
  matingDate1: {
    type: Date,
    required: true,
  },
  matingDate2: {
    type: Date,
    required: true,
  },
  nesting: {
    type: String,
    required: false,
  },
  kindling: {
    type: String,
    required: false,
  },
  status: { type: String, required: false, default: 'Pending' },
});

const Mating = mongoose.model('Mating', matingSchema);

module.exports = Mating;
