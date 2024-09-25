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
  },
  experience: {
    type: DataTypes.INTEGER,
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
  gold: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'players',
  timestamps: false
});

module.exports = Player;
