const express = require('express');
const session = require('express-session');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup',controller.signup) //회원가입페이지 열기
router.post('/signup',controller.post_signup)//회원가입 정보 저장
//로그인
router.get('/signin', controller.signin)
router.post('/signin', controller.post_signin)

//회원정보 조회
router.get('/profile/:id', controller.profile)
//get 조회 방식일때는 url을 query string 또는 파라미터 방식으로 지정 
//params방식은 url이동처럼 작용하고(naver.com/ddd)
//query string은 url로 인식x (naver.com?name) 
//query string은 페이지 이동을 안하며 파라미터ㄹ는 페이지를 이동 페이지 이동을 안함 (res.render일때)

router.patch('profile/edit', controller.edit_profile);
//예시) 회원 구매목록
router.get('/profile/buy',controller.buy)
//이렇게 하면 위에 get /profile/:id에 걸려서 이 페이지에 접근할 수 없음. id위로 올려야함 
//id는 변수라서 아무거나 다 들어갈수 있음  (get방식에서)

//회원정보 수정
router.patch('/edit', controller.edit)
//로그아웃
router.get('/logout',controller.logout)


module.exports = router;
