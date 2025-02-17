const express = require('express');
const TareaController = require('../controllers/tareaController');

const router = express.Router();
const tareaController = new TareaController();

// GET /tareas - Obtener todas las tareas
router.get('/tareas', tareaController.getTareas.bind(tareaController));

// POST /tareas - Crear una nueva tarea
router.post('/tareas', tareaController.createTarea.bind(tareaController));

// DELETE /tareas/:id - Eliminar una tarea por ID
router.delete('/tareas/:id', tareaController.deleteTarea.bind(tareaController));

module.exports = router;