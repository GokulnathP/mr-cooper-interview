const express = require('express');
const serviceController = require('../controller/service');

const router = express.Router();

router.get('/', serviceController.getService);
router.post('/addService', serviceController.addService);

module.exports = router;