'use strict';


const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

//config/config.js 파일에 있는 정보를 가져와 sequelize 객체를 생성한다. 
const  sequelize = new Sequelize(config.database, config.username, config.password, config);


//model
db.User = require('./Users')(sequelize)
// const a = require('./Visitor')
// const b = a(sequelize, Sequelize)
// db.Visitor = b

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
