const express = require('express');
const router = express.Router();
const rawMaterialController = require('../controllers/rawMaterialController');

router.get('/', rawMaterialController.index);
router.get('/new', rawMaterialController.newForm);
router.post('/', rawMaterialController.create);
router.get('/:id/edit', rawMaterialController.editForm);
router.put('/:id', rawMaterialController.update);
router.delete('/:id', rawMaterialController.delete);

module.exports = router;
