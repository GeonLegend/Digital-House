const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')

router.get('/', mainController.inicio);

module.exports = router;