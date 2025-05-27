const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  GST: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  email: { type: String }
});

module.exports = mongoose.model('Client', clientSchema);
