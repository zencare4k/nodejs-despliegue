const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const tareaRoutes = require('./routes/tareaRoutes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos MongoDB
connectDB();

app.use(express.json()); // Middleware para parsear JSON

// Usar las rutas de tareas
app.use('/tareas', tareaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});