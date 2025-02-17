class TareaController {
  async getTareas(req, res) {
    try {
      const tareas = await Tarea.find();
      res.json(tareas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las tareas' });
    }
  }

  async createTarea(req, res) {
    const { titulo, descripcion } = req.body;

    if (!titulo || !descripcion) {
      return res.status(400).json({ message: 'El título y la descripción son obligatorios' });
    }

    try {
      const nuevaTarea = new Tarea({ titulo, descripcion });
      await nuevaTarea.save();
      res.status(201).json(nuevaTarea);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la tarea' });
    }
  }

  async deleteTarea(req, res) {
    const { id } = req.params;

    try {
      const tarea = await Tarea.findByIdAndDelete(id);
      if (!tarea) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.json({ message: 'Tarea eliminada' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
  }
}

module.exports = new TareaController();