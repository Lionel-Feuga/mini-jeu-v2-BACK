const { Player } = require('../models/index');

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
    const player = await Player.create(req.body);
    res.status(201).json(player);
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
