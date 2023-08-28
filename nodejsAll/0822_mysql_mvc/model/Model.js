const mysql = require('mysql');

//mysql연결
//createConnection
//단일연결. 요청할때마다 새로운 연결을 생성
//적은 수의 동시연결이나 단순한 데이터베이스 쿼리일때 사용
const conn = mysql.createConnection({
    host: 'localhost',
    user: '0807',
    password: 'mawoss3223',
    database: 'kdt9',
    port: 3306,
});


//createPool
const conn2 =mysql.createPool({
    host: 'localhost',
    user: '0807',
    password: 'mawoss3223',
    database: 'kdt9',
    port: 3306,
    connectionLimit: 30 //최대 연결 수 (기본값 10)
})
//연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
//요청이 들어오면 연결 풀에서 사용가능한 연결을 제공.작업완료후 해당 연결을 반환
//연결이 필요하지 않을 경우 자동으로 반환
//다중연결 서비스에 적합



//문자열 보간방법
//`INSERT INTO users (userid, pw, name) VALUES ('${data.userid}', '${data.pw}','${data.name}')`
//쿼리문에 데이터를 직접 넣어서 쓰는것
//단점
//1.sql 인젝션 공격에 취약 (쿼리문을 데이터가 바로 있기때문에 직접 조작하여 엉뚱한 값을 들어가게 하는것)
//2.문자열에 특수문자가 포함될 경우 오류가 발생할 수도 있음

//Prepared Statement
//INSERT INTO users (userid, pw, name) VALUES (?,?,?)
//

//회원가입 정보 데이터베이스 저장
const db_signup = (data, cb) =>{
    // const query = `INSERT INTO users (userid, pw, name) VALUES ('${data.userid}', '${data.pw}','${data.name}')`
    // conn.query(query, (err, rows)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_signup',rows);
    //     cb();
    // });
    const query = 'INSERT INTO users (userid, pw, name) VALUES (?,?,?)'
    conn.query(query, [data.userid, data.pw, data.name], (err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('db_signup',rows);
        cb();
    })
}

//로그인
const db_signin = (data, cb) =>{
    // const query = `SELECT * FROM users WHERE userid='${data.userid}' AND pw='${data.pw}'`
    const query = 'SELECT * FROM users WHERE userid = ? AND pw = ? '
    conn.query(query,[ data.userid, data.pw ],(err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('db_signin', rows); //rows는 항상 배열로 나옴. 
        //select문의 쿼리문은 배열로 반환(rows)
        cb(rows);
    })
}

//회원정보 조회
const db_profile = (data, cb)=>{
    // const query = `SELECT * FROM users WHERE id='${data}'`;
    // conn.query(query, (err, rows)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log('db_profile',rows);
    //     cb(rows)
    // })
    const query = 'SELECT * FROM users WHERE id = ?';
    conn.query(query, [data], (err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('db_profile',rows);
        cb(rows)
    })
}

//회원정보 수정
const db_edit = (data, cb) =>{
    // const query = `UPDATE users SET name='${data.name}', userid='${data.userid}' WHERE id='${data.id}'`
    const query = 'UPDATE users SET name=? , userid=?  WHERE id=?'
    conn.query(query,[data.name, data.userid, data.id],(err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('db_edit', rows);
        cb(true)
    })
}

module.exports= {
    db_signin,
    db_signup,
    db_profile,
    db_edit
}
