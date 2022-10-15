const Sequelize = require('sequelize');
const {
  dbname, user, password, host, port
} = require('../config/config').databases;

const sequelize = new Sequelize(dbname, user, password, {
  dialect: 'mysql',
  host,
  port
})

sequelize.authenticate()
  .then(() => console.log('connect success'))
  .catch(err => console.log('connect err: ', err))

module.exports = sequelize;