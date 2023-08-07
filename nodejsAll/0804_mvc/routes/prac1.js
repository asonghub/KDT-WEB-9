const express = require('express');
const router = express.Router();
const controller = require('../controller/Cprac1');

//app.~ 을 router.으로 바꾸는것 잊지말깅
router.get('/', controller.main)

router.post('/prac1',controller.confirm )

module.exports = router;