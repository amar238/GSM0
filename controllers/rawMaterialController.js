const RawMaterial = require('../models/rawMaterial');
const Client = require('../models/client');
const StockTransaction = require('../models/stockTransaction');

// Show all raw materials
exports.index = async (req, res) => {
  const rawMaterials = await RawMaterial.find().populate('client');
  res.render('rawMaterials/index', { title: 'Raw Materials', rawMaterials });
};

// New raw material form
exports.newForm = async (req, res) => {
  const clients = await Client.find();
  res.render('rawMaterials/new', { title: 'Add Raw Material', clients });
};

// Create raw material
exports.create = async (req, res) => {
  try {
    await RawMaterial.create(req.body);
    res.redirect('/raw-materials');
  } catch (err) {
    res.status(500).send('Error creating raw material');
  }
};

// Edit form
exports.editForm = async (req, res) => {
  const rawMaterial = await RawMaterial.findById(req.params.id);
  const clients = await Client.find();
  res.render('rawMaterials/edit', { title: 'Edit Raw Material', rawMaterial, clients });
};

// Update
exports.update = async (req, res) => {
  try {
    await RawMaterial.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/raw-materials');
  } catch (err) {
    res.status(500).send('Error updating raw material');
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    await RawMaterial.findByIdAndDelete(req.params.id);
    res.redirect('/raw-materials');
  } catch (err) {
    res.status(500).send('Error deleting raw material');
  }
};
