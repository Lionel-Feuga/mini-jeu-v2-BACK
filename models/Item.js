const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_buy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_sell: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'items',
  timestamps: false
});

module.exports = Item;
