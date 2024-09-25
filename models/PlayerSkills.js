const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Player = require('./Player');
const Skills = require('./Skills');

const PlayerSkills = sequelize.define('PlayerSkills', {
  playerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Player,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  skillId: {
    type: DataTypes.INTEGER,
    references: {
      model: Skills,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'player_skills',
  timestamps: false
});

// Relations
PlayerSkills.belongsTo(Player, { foreignKey: 'playerId', onDelete: 'CASCADE' });
PlayerSkills.belongsTo(Skills, { foreignKey: 'skillId', onDelete: 'CASCADE' });

module.exports = PlayerSkills;
