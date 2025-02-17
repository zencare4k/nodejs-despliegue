const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

// Almacén temporal de tareas (se perderán al reiniciar el servidor)
let tareas = [];
let idCounter = 1; // Para asignar IDs únicos

// GET /tareas - Obtener todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// POST /tareas - Crear una nueva tarea
app.post('/tareas', (req, res) => {
  const { titulo, descripcion } = req.body; s

  if (!titulo || !descripcion) {
    return res.status(400).json({ message: 'El título y la descripción son obligatorios' });
  }

  const nuevaTarea = { id: idCounter++, titulo, descripcion };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// DELETE /tareas/:id - Eliminar una tarea por ID
app.delete('/tareas/:id', (req, res) => {
  const { id } = req.params;
  const tareaIndex = tareas.findIndex(t => t.id === parseInt(id));

  if (tareaIndex === -1) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  tareas.splice(tareaIndex, 1);
  res.json({ message: 'Tarea eliminada' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
