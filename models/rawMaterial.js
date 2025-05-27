const mongoose = require('mongoose');

const rawMaterialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  HSN: { type: String, required: true },
  quantity: { type: Number, default: 0 } // Stock management
});

module.exports = mongoose.model('RawMaterial', rawMaterialSchema);
