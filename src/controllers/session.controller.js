import Session from '../models/session.model';

export const createSession = async (req, res) => {
  try {
    await Session.create(req.body);
    res
      .status(201)
      .json({ message: 'Sesion registrada exitosamente' });
  } catch (e) {
    console.log(e);
    return {
      error: 'Error al registrar Sesion',
      message: e.error || e.message,
    };
  }
};

export const getAllSessions = async (req, res) => {
  const data = await Session.findAll();
  res.json(data);
};

export const getSessionById = async (req, res) => {
  const data = await Session.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Sesion no encontrada' });
  }
  res.json(data);
};

export const updateSession = async (req, res) => {
  const { body } = req;
  const data = await Session.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Sesion no encontrada' });
  }
  await data.update(body);
  res.json({ message: 'Sesion actualizada exitosamente' });
};

export const deleteSession = async (req, res) => {
  const data = await Session.findByPk(req.params.id);
  if (!data) {
    res.status(404).json({ error: 'Sesion no encontrada' });
  }
  await data.destroy();
  res.json({ message: 'Sesion eliminada exitosamente' });
};

