const { Inventory } = require('../models');

module.exports = function (app) {
  app.get('/api/inventories', async (req, res) => {
    const inventories = await Inventory.findAll();
    res.json(inventories);
  });

  app.get('/api/inventories/:id', async (req, res) => {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire non trouvé.');
    }
    res.json(inventory);
  });

  const { Inventory, Item } = require('../models');

 
    app.get('/api/inventories/player/:playerId', async (req, res) => {
      const playerId = req.params.playerId;
      try {
        const inventory = await Inventory.findAll({
          where: { playerId },
          include: {
            model: Item, 
          },
        });
        if (!inventory.length) {
          return res.status(404).send('Aucun inventaire trouvé pour ce joueur.');
        }
        res.json(inventory);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'inventaire :', error);
        res.status(500).send('Erreur lors de la récupération de l\'inventaire.');
      }
    });

  app.post('/api/inventories', async (req, res) => {
    const inventory = await Inventory.create(req.body);
    res.status(201).json(inventory);
  });

  app.put('/api/inventories/:id', async (req, res) => {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire non trouvé.');
    }
    const updatedInventory = await inventory.update(req.body);
    res.json(updatedInventory);
  });

  app.delete('/api/inventories/:id', async (req, res) => {
    const inventory = await Inventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire non trouvé.');
    }
    await inventory.destroy();
    res.send('Inventaire supprimé avec succès.');
  });
};
