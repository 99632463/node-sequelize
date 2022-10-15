const sequelize = require('../core/db');
const { Sequelize, Model } = require('sequelize');

class User extends Model { }

User.init({
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'users',
  timestamps: false
})

module.exports = User;