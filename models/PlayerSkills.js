const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PlayerSkills = sequelize.define('PlayerSkills', {
  playerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  skillId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'player_skills',
  timestamps: false,  // Désactive les timestamps
});

module.exports = PlayerSkills;
