const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SkillsEffect = sequelize.define('SkillsEffect', {
  effect_type: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  effect_value: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
}, {
  tableName: 'skills_effect',
  timestamps: false,
});

module.exports = SkillsEffect;
