const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시데이터
const comments = [
    {
        id: 1,
        userid: 'asong',
        date: '2023-08-05',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userid: 'yk',
        date: '2023-08-12',
        comment: '영경입니다'
    },
    {
        id: 3,
        userid: 'jw',
        date: '2023-08-13',
        comment: '재운입니다'
    },
    {
        id: 4,
        userid: 'ym',
        date: '2023-08-22',
        comment: '유민입니다'
    },
    {
        id: 5,
        userid: 'mj',
        date: '2023-08-23',
        comment: '민재입니다'
    },
    {
        id: 6,
        userid: 'cw',
        date: '2023-08-22',
        comment: '철웅입니다'
    }
]

module.exports = comments;