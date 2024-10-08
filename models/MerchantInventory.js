const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Item = require('./Item');

const MerchantInventory = sequelize.define('MerchantInventory', {
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level_required: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'merchant_inventory',
  timestamps: false,
});

MerchantInventory.belongsTo(Item, { foreignKey: 'itemId' });

module.exports = MerchantInventory;
