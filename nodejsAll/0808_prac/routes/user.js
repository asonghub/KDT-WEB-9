const express = require('express');
const controller = require('../controller/Cuser'); 
const router = express.Router();

//회원가입화면
router.get('/signup',controller.signUp);

router.post('/signup', controller.registerUser)

//로그인
router.get('/signin',controller.signIn);
router.post('/signin', controller.confirmUser);

//프로필
// router.get('/profile',controller.profile);
router.post('/profile',controller.postProfile)

//프로필 수정
router.patch('/edit',controller.editProfile)

//탈퇴
router.delete('/delete',controller.deleteUser)

//로그아웃
router.post('/logout',controller.logout)

module.exports = router;