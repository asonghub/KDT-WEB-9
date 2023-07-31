// const mod = require('./module')
// console.log(mod);
// console.log(mod.a);

// const {b}=require('./module')
// console.log(b)

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){   //요청, 응답 순서주의
    // res.writeHead(200)
    // res.write('<h1>Hello World!</h1>')
    // res.end('<p>End</p>')

    //파일 전송
    try{
        const data = fs.readFileSync('./index.html')
        res.writeHead(200)
        res.end(data)
    }catch(error){
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

server.listen(8080, function(){
    console.log('8080번 포트로 서버 실행');
});