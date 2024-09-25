const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Enemy = sequelize.define('Enemy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HP: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  AP: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  damage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'enemies',
  timestamps: false
});

module.exports = Enemy;
