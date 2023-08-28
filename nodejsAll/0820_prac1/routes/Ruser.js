const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.index);

//회원가입
router.get('/join', controller.get_join);
router.post('/join', controller.join);

//로그인
router.get('/login',controller.get_login);
router.post('/login', controller.login);

//회원정보
router.get('/profile',controller.profile);

module.exports = router;