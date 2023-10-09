const mongoose = require('mongoose');

const quarantineSchema = new mongoose.Schema({
  animal: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  outcome: {
    type: String,
    required: true,
    default: 'Quarantined',
  },
  startDate: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
});

const Quarantine = mongoose.model('Quarantine', quarantineSchema);

module.exports = Quarantine;
