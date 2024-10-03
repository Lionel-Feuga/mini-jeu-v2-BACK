const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Player = sequelize.define('Player', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  HP: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 60,
  },
  AP: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3,
  },
  gold: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 150,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'players',
  timestamps: false,  
});

module.exports = Player;
