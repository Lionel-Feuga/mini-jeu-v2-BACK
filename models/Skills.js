const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost_pa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  damage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  level_required: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'skills',
  timestamps: false,
});

module.exports = Skill;
