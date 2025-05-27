const StockTransaction = require('../models/stockTransaction');
const RawMaterial = require('../models/rawMaterial');

// Show stock history
exports.history = async (req, res) => {
  const material = await RawMaterial.findById(req.params.id);
  const transactions = await StockTransaction.find({ rawMaterial: req.params.id }).sort({ date: -1 });
  res.render('rawMaterials/stockHistory', { title: 'Stock History', material, transactions });
};

// Form to add stock
exports.newForm = async (req, res) => {
  const material = await RawMaterial.findById(req.params.id);
  res.render('rawMaterials/addStock', { title: 'Update Stock', material });
};

// Create stock transaction
exports.create = async (req, res) => {
  const { type, quantity, note } = req.body;
  const rawMaterialId = req.params.id;

  try {
    const transaction = new StockTransaction({
      rawMaterial: rawMaterialId,
      type,
      quantity,
      note
    });

    await transaction.save();

    // Update rawMaterial quantity
    const rawMaterial = await RawMaterial.findById(rawMaterialId);
    rawMaterial.quantity += type === 'IN' ? Number(quantity) : -Number(quantity);
    await rawMaterial.save();

    res.redirect(`/raw-materials/${rawMaterialId}/stock`);
  } catch (err) {
    res.status(500).send('Error processing stock transaction');
  }
};
