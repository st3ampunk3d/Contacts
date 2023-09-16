const router = require('express').Router();

const contactController = require('../controllers/contacts');

router.get('/contacts', contactController.getAll);
router.get('/contacts/:id', contactController.getSingle);

module.exports = router;