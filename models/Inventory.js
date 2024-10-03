const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Item = require('./Item');

const Inventory = sequelize.define('Inventory', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_equipped: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'inventories',
  timestamps: false,
});

Inventory.belongsTo(Item, { foreignKey: 'itemId' });
Item.hasMany(Inventory, { foreignKey: 'itemId' });

module.exports = Inventory;
