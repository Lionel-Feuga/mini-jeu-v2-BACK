const Player = require('./Player');
const Skill = require('./Skills');
const Inventory = require('./Inventory');
const Enemy = require('./Enemy');
const PlayerSkills = require('./PlayerSkills');
const SkillsEffect = require('./SkillsEffect');
const Item = require('./Item');
const MerchantInventory = require('./MerchantInventory');

Player.belongsToMany(Skill, {
  through: PlayerSkills,
  foreignKey: 'playerId',
  timestamps: false  
});
Skill.belongsToMany(Player, {
  through: PlayerSkills,
  foreignKey: 'skillId',
  timestamps: false  
});

Skill.hasOne(SkillsEffect, { foreignKey: 'skill_id' });
SkillsEffect.belongsTo(Skill, { foreignKey: 'skill_id' });

Player.hasMany(Inventory, {
  foreignKey: 'playerId',
  onDelete: 'CASCADE',
});
Inventory.belongsTo(Player, { foreignKey: 'playerId' });
Inventory.belongsTo(Item, { foreignKey: 'itemId' });
Item.hasMany(Inventory, { foreignKey: 'itemId' });

MerchantInventory.belongsTo(Item, { foreignKey: 'itemId' });

module.exports = {
  Player,
  Skill,
  Inventory,
  Enemy,
  PlayerSkills,
  SkillsEffect,
  Item,
  MerchantInventory
};
