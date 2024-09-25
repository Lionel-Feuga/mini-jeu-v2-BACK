const express = require('express');
const sequelize = require('./config/db');  
require('dotenv').config();  

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());  
require('./controllers/playerController')(app);
require('./controllers/enemyController')(app);
require('./controllers/itemController')(app);
require('./controllers/inventoryController')(app);
require('./controllers/playerSkillsController')(app);
require('./controllers/skillsController')(app);
require('./controllers/merchantInventoryController')(app);

sequelize.sync().then(() => {
  console.log('Base de données synchronisée');
  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Erreur lors de la synchronisation de la base de données :', err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);  
  res.status(500).send('Erreur interne du serveur.');
});
