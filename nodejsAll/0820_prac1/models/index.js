'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//환경변수를 읽어옴. 실행환경을 development로 설정 (production, test 등 가능)
const config = require(__dirname + '/../config/config.json')[env];
//?
const db = {};
//데이터베이스 관련 객체를 저장할 빈 객체

const sequelize = new Sequelize(config.database, config.username, config.password, config);
//데이터베이스 이름, 사용자이름, 비밀번호, 옵션이 전달된 seguelize 인스턴스 생성 
db.User = require('./User')(sequelize);

db.sequelize = sequelize; //위에서 생성한 sequelize 인스턴스를 db에 저장
db.Sequelize = Sequelize; // Sequelize 클래스를 db에 저장

module.exports = db; //db 객체를 모듈로 내보냄
