const { Player, PlayerSkills, Inventory, Skill, Item } = require('../models'); 
const sequelize = require('../config/db');

module.exports = function (app) {
  app.get('/api/players', async (req, res) => {
    const players = await Player.findAll();
    res.json(players);
  });

  app.get('/api/players/:id', async (req, res) => {
    const player = await Player.findByPk(req.params.id);
    if (!player) {
      return res.status(404).send('Joueur non trouvé.');
    }
    res.json(player);
  });

  app.post('/api/players', async (req, res) => {
    const transaction = await sequelize.transaction(); 
    try {
      const newPlayer = await Player.create(req.body, { transaction });

      const baseSkills = [1, 3, 4]; 
      const playerSkillsData = baseSkills.map(skillId => ({
        playerId: newPlayer.id,
        skillId: skillId
      }));
      await PlayerSkills.bulkCreate(playerSkillsData, { transaction });

      const starterItems = [
        { playerId: newPlayer.id, itemId: 1, quantity: 1, is_equipped: 0 },  
        { playerId: newPlayer.id, itemId: 2, quantity: 1, is_equipped: 1 },  
        { playerId: newPlayer.id, itemId: 3, quantity: 1, is_equipped: 1 }  
      ];

      await Inventory.bulkCreate(starterItems, { transaction });

      await transaction.commit();
      res.status(201).json({ id: newPlayer.id });

    } catch (error) {
      await transaction.rollback();
      console.error("Erreur lors de la création du joueur :", error);
      res.status(500).json({ error: 'Erreur lors de la création du joueur' });
    }
  });

  app.put('/api/players/:id', async (req, res) => {
    const player = await Player.findByPk(req.params.id);
    if (!player) {
      return res.status(404).send('Joueur non trouvé.');
    }
    const updatedPlayer = await player.update(req.body);
    res.json(updatedPlayer);
  });

  app.delete('/api/players/:id', async (req, res) => {
    const player = await Player.findByPk(req.params.id);
    if (!player) {
      return res.status(404).send('Joueur non trouvé.');
    }
    await player.destroy();
    res.send('Joueur supprimé avec succès.');
  });
};
