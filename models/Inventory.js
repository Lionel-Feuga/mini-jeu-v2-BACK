const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Player = require('./Player');
const Item = require('./Item');

const Inventory = sequelize.define('Inventory', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_equipped: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  tableName: 'inventories',
  timestamps: false
});

// Relations
Inventory.belongsTo(Player, { foreignKey: 'playerId', onDelete: 'CASCADE' });
Inventory.belongsTo(Item, { foreignKey: 'itemId', onDelete: 'CASCADE' });

module.exports = Inventory;
