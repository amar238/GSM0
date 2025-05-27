const mongoose = require('mongoose');

const stockTransactionSchema = new mongoose.Schema({
  rawMaterial: { type: mongoose.Schema.Types.ObjectId, ref: 'RawMaterial', required: true },
  type: { type: String, enum: ['IN', 'OUT'], required: true },
  quantity: { type: Number, required: true },
  note: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StockTransaction', stockTransactionSchema);
