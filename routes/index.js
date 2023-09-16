const router = require('express').Router();

const contactController = require('../controllers/contacts');

router.get('/', (req, res) => { res.send('Week 1 - Contacts Part 1') });
router.get('/contacts', contactController.getAll);
router.get('/contacts/:id', contactController.getSingle);

module.exports = router;