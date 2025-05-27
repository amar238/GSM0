const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.index);
router.get('/new', clientController.newForm);
router.post('/', clientController.create);
router.get('/:id/edit', clientController.editForm);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);

module.exports = router;
