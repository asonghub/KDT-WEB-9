const express = require('express'); //express 라이브러리 첨부해주셈
const app = express(); //객체 만들기

app.listen(8080,function(){ //listen(포트번호, 포트에서 실행할 코드)
    console.log('listening on 8080')
});

// 누군가 /pet으로 방문하면
// pet 관련 안내문을 띄워주자

app.get('/pet', function(요청, 응답){
    응답.send('펫용품을 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품을 쇼핑할 수 있는 페이지입니다....');
});

app.get('/', function(요청, 응답){ // /하나만 쓰면 홈
    응답.sendFile(__dirname + '/index.html') //senFile 보낼파일 경로
});