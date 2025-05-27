const Client = require('../models/client');

// Show all clients
exports.index = async (req, res) => {
  const clients = await Client.find();
  res.render('clients/index', { title: 'Clients', clients });
};

// Show new client form
exports.newForm = (req, res) => {
  res.render('clients/new', { title: 'Add Client' });
};

// Create client
exports.create = async (req, res) => {
  try {
    await Client.create(req.body);
    res.redirect('/clients');
  } catch (err) {
    res.status(500).send('Error creating client');
  }
};

// Show edit form
exports.editForm = async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.render('clients/edit', { title: 'Edit Client', client });
};

// Update client
exports.update = async (req, res) => {
  try {
    await Client.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/clients');
  } catch (err) {
    res.status(500).send('Error updating client');
  }
};

// Delete client
exports.delete = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.redirect('/clients');
  } catch (err) {
    res.status(500).send('Error deleting client');
  }
};
