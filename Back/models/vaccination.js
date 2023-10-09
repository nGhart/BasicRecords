const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  medication: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  nextDate: {
    type: Number,
    required: true,
  },
  status: { type: String, required: false, default: 'Pending' },
});

const Vaccination = mongoose.model('Vaccination', vaccinationSchema);

module.exports = Vaccination;
