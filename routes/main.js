const express = require('express');
const phonesController = require('../controllers/phoneController');
const router = express.Router();

router.get('/', phonesController.getMainPage);

router.post('/add-user', phonesController.addNewUser);

router.post('/delete', phonesController.deleteContact);

module.exports = router;