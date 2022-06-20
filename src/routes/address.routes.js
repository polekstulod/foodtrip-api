var router = require('express').Router();

const addressController = require('../controllers/address.controller');

router.post('/', addressController.create);
router.put('/:id', addressController.update);
router.get('/', addressController.findAll);
router.get('/:id', addressController.findOne);
router.delete('/:id', addressController.delete);

module.exports = router;
