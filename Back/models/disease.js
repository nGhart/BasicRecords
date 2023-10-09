const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  diseaseAnimal: {
    type: String,
    required: true,
  },
  diseaseCondition: {
    type: String,
    required: true,
  },

  diseaseManagement: {
    type: String,
    required: false,
  },
  diseaseDuration: {
    type: Number,
    required: false,
  },
  diseaseOutcome: {
    type: String,
    required: false,
    default: 'In treatment',
  },
  diseaseDate: {
    type: String,
    required: false,
  },
});

const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;
