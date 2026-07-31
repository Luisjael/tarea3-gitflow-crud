const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('API de Tareas - Tarea 3 Git Flow (ITLA)');
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es requerido' });
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

module.exports = { app, tasks };

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}
