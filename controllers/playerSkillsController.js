const { PlayerSkills, Player, Skill } = require("../models");

module.exports = function (app) {
  app.get("/api/player-skills", async (req, res) => {
    const playerSkills = await PlayerSkills.findAll();
    res.json(playerSkills);
  });

  app.get("/api/player-skills/:id", async (req, res) => {
    const playerSkill = await PlayerSkills.findByPk(req.params.id);
    if (!playerSkill) {
      return res.status(404).send("Compétence du joueur non trouvée.");
    }
    res.json(playerSkill);
  });

  app.get('/api/players/:id/skills', async (req, res) => {
    const playerId = req.params.id;
    const player = await Player.findByPk(playerId, {
      include: {
        model: Skill,
        through: 'player_skills',
      },
    });

    if (!player) {
      return res.status(404).send('Player not found');
    }
    
    res.json(player.Skills);
  });
  

  app.post("/api/player-skills", async (req, res) => {
    const playerSkill = await PlayerSkills.create(req.body);
    res.status(201).json(playerSkill);
  });

  app.put("/api/player-skills/:id", async (req, res) => {
    const playerSkill = await PlayerSkills.findByPk(req.params.id);
    if (!playerSkill) {
      return res.status(404).send("Compétence du joueur non trouvée.");
    }
    const updatedPlayerSkill = await playerSkill.update(req.body);
    res.json(updatedPlayerSkill);
  });

  app.delete("/api/player-skills/:id", async (req, res) => {
    const playerSkill = await PlayerSkills.findByPk(req.params.id);
    if (!playerSkill) {
      return res.status(404).send("Compétence du joueur non trouvée.");
    }
    await playerSkill.destroy();
    res.send("Compétence du joueur supprimée avec succès.");
  });
};
