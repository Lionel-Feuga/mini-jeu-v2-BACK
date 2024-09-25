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
