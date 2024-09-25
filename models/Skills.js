const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Skills = sequelize.define('Skills', {
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
    allowNull: false,
  },
  level_required: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'skills',
  timestamps: false
});

module.exports = Skills;
