const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
router.get('/register', controller.get_register);
router.get('/login', controller.get_login)
//로그인
router.post('/login', controller.login);

//회원가입
router.post('/register', controller.register);

module.exports = router;
