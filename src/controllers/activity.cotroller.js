import Activity from '../models/activity.model';

export const createActivity = async (req, res) => {
  try {
    await Activity.create(req.body);
    res
      .status(201)
      .json({ message: 'Actividad registrada exitosamente' });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: 'Error al registrar Actividad',
      message: e.error || e.message,
    });
  }
};

export const getAllActivitys = async (req, res) => {
  const data = await Activity.findAll();
  res.json(data);
};

export const getActivityById = async (req, res) => {
  const data = await Activity.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Actividad no encontrada' });
    return
  }
  res.json(data);
};

export const updateActivity = async (req, res) => {
  const { body } = req;
  const data = await Activity.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Actividad no encontrada' });
    return
  }
  await data.update(body);
  res.json({ message: 'Actividad actualizada exitosamente' });
};

export const deleteActivity = async (req, res) => {
  const data = await Activity.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Actividad no encontrada' });
    return
  }
  await data.destroy();
  res.json({ message: 'Actividad eliminada exitosamente' });
};

