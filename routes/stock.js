const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// /raw-materials/:id/stock
router.get('/raw-materials/:id/stock', stockController.history);
router.get('/raw-materials/:id/stock/new', stockController.newForm);
router.post('/raw-materials/:id/stock', stockController.create);

module.exports = router;
