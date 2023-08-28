const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get('/signIn', controller.signIn)
router.post('/signIn', controller.verifyUser)
//회원가입
router.get('/signUp', controller.signUp);
router.post('/signUp', controller.registerUser)

module.exports = router;
