const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/users', controller.users);
router.post('/users', controller.register);

module.exports = router;
