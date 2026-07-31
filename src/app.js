const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('API de Tareas - Tarea 3 Git Flow (ITLA)');
});

module.exports = { app, tasks };

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}
