const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const studendts = [
    {
        userid : 1,
        name : '마아송',
        gender: '여',
        major: '전자공학'
    },
    {
        userid : 2,
        name : '이영경',
        gender: '여',
        major: '산업공학'
    },
    {
        userid : 3,
        name : '심재운',
        gender: '남',
        major: '컴퓨터공학'
    },
    {
        userid : 4,
        name : '전유민',
        gender: '여',
        major: '영어영문'
    },
    {
        userid : 5,
        name : '김민재',
        gender: '남',
        major: '정보통신공학'
    },
    {
        userid : 6,
        name : '홍철웅',
        gender: '남',
        major: '컴퓨터공학'
    }
]

module.exports = studendts;