const { Skills } = require('../models');

module.exports = function (app) {
  app.get('/api/skills', async (req, res) => {
    const skills = await Skills.findAll();
    res.json(skills);
  });

  app.get('/api/skills/:id', async (req, res) => {
    const skill = await Skills.findByPk(req.params.id);
    if (!skill) {
      return res.status(404).send('Compétence non trouvée.');
    }
    res.json(skill);
  });

  app.post('/api/skills', async (req, res) => {
    const skill = await Skills.create(req.body);
    res.status(201).json(skill);
  });

  app.put('/api/skills/:id', async (req, res) => {
    const skill = await Skills.findByPk(req.params.id);
    if (!skill) {
      return res.status(404).send('Compétence non trouvée.');
    }
    const updatedSkill = await skill.update(req.body);
    res.json(updatedSkill);
  });

  app.delete('/api/skills/:id', async (req, res) => {
    const skill = await Skills.findByPk(req.params.id);
    if (!skill) {
      return res.status(404).send('Compétence non trouvée.');
    }
    await skill.destroy();
    res.send('Compétence supprimée avec succès.');
  });
};
