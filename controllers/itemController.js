const { Item } = require('../models');

module.exports = function (app) {
  app.get('/api/items', async (req, res) => {
    const items = await Item.findAll();
    res.json(items);
  });

  app.get('/api/items/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send('Item non trouvé.');
    }
    res.json(item);
  });

  app.post('/api/items', async (req, res) => {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  });

  app.put('/api/items/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send('Item non trouvé.');
    }
    const updatedItem = await item.update(req.body);
    res.json(updatedItem);
  });

  app.delete('/api/items/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send('Item non trouvé.');
    }
    await item.destroy();
    res.send('Item supprimé avec succès.');
  });
};
