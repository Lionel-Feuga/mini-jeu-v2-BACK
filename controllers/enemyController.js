const { Enemy } = require('../models');

module.exports = function (app) {
  app.get('/api/enemies', async (req, res) => {
    const enemies = await Enemy.findAll();
    res.json(enemies);
  });

  app.get('/api/enemies/:id', async (req, res) => {
    const enemy = await Enemy.findByPk(req.params.id);
    if (!enemy) {
      return res.status(404).send('Ennemi non trouvé.');
    }
    res.json(enemy);
  });

  app.post('/api/enemies', async (req, res) => {
    const enemy = await Enemy.create(req.body); 
    res.status(201).json(enemy);
  });

  app.put('/api/enemies/:id', async (req, res) => {
    const enemy = await Enemy.findByPk(req.params.id);
    if (!enemy) {
      return res.status(404).send('Ennemi non trouvé.');
    }
    const updatedEnemy = await enemy.update(req.body); 
    res.json(updatedEnemy);
  });

  app.delete('/api/enemies/:id', async (req, res) => {
    const enemy = await Enemy.findByPk(req.params.id);
    if (!enemy) {
      return res.status(404).send('Ennemi non trouvé.');
    }
    await enemy.destroy();
    res.send('Ennemi supprimé avec succès.');
  });
};
