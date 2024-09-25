const { MerchantInventory } = require('../models');

module.exports = function (app) {
  app.get('/api/merchant-inventory', async (req, res) => {
    const inventory = await MerchantInventory.findAll();
    res.json(inventory);
  });

  app.get('/api/merchant-inventory/:id', async (req, res) => {
    const inventory = await MerchantInventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire du marchand non trouvé.');
    }
    res.json(inventory);
  });

  app.post('/api/merchant-inventory', async (req, res) => {
    const inventory = await MerchantInventory.create(req.body);
    res.status(201).json(inventory);
  });

  app.put('/api/merchant-inventory/:id', async (req, res) => {
    const inventory = await MerchantInventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire du marchand non trouvé.');
    }
    const updatedInventory = await inventory.update(req.body);
    res.json(updatedInventory);
  });

  app.delete('/api/merchant-inventory/:id', async (req, res) => {
    const inventory = await MerchantInventory.findByPk(req.params.id);
    if (!inventory) {
      return res.status(404).send('Inventaire du marchand non trouvé.');
    }
    await inventory.destroy();
    res.send('Inventaire du marchand supprimé avec succès.');
  });
};
