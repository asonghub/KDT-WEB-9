const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: '0807',
    password: 'mawoss3223',
    database: 'kdt9'
});

conn.connect( (err)=>{
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
})

// exports.getInfo = (callback)=>{
//     const query =  'SELECT * FROM userinfo';
//     conn.query(query, (err, rows)=>{
//         console.log(rows);
//         callback(rows);
//     })
// }

exports.registerUser = (data, callback)=>{
    console.log('data', data)
    const query = `INSERT  INTO userinfo (name, userid, pw) VALUES ('${data.name}', '${data.userid}','${data.pw}')` 
    conn.query(query, (err, rows)=>{
        if(err) {
            console.log(err)
        }
        console.log('rows',rows)

        callback(rows);
    });
}

exports.confirmUser = (data, callback)=>{
    const query = `SELECT pw FROM userinfo WHERE userid = '${data.userid}'`
    conn.query(query,(err, rows)=>{
        if(err){
            console.log(err);
        }
        console.log('rows',rows)
        callback(rows);
    })
}

exports.getUserInfo = (data, callback) =>{
    const query = `SELECT * FROM userinfo WHERE userid = '${data.userid}'`
    conn.query(query,(err, rows)=>{
        if(err){
            console.log(err);
        }
        console.log('rows',rows)
        callback(rows);
    })
}

exports.patchUser = (data, callback) =>{
    const query = `UPDATE userinfo SET name='${data.name}', userid='${data.userid}', pw='${data.pw}' WHERE id='${data.id}'`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('수정 rows', rows)
        callback();
    }) 
}

exports.deleteUser = (data, callback)=>{
    const query = `DELETE FROM userinfo WHERE id=${data.id}`;
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
        }
        callback();
    })
}
