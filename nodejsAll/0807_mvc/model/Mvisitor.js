// exports.getVisitors = () =>{
//     return [
//         { id: 1, name: '홍길동', comment: '내가왔다'},
//         { id: 2, name: '이찬혁', comment: '으라차차'},
//     ];
// };

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: '0807',
    password: 'mawoss3223',
    database: 'kdt9',
});