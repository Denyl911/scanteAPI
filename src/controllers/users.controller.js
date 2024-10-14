import User from '../models/user.model';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await Bun.password.hash(password);
  try {
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SCANTEATE_JSON_SECRET,
      { expiresIn: '30d' }
    );
    res
      .status(201)
      .json({ user, token, message: 'Usuario registrado exitosamente' });
  } catch (e) {
    console.log(e);
    return {
      error: 'Error al registrar Usuario',
      message: e.error || e.message,
    };
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
};

export const updateUser = async (req, res) => {
  const { body } = req;
  if (body.password) {
    body.password = await Bun.password.hash(body.password);
  }
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
  await user.update(body);
  res.json({ message: 'Usuario actualizado exitosamente' });
};

export const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
  await user.destroy();
  res.json({ message: 'Usuario eliminado exitosamente' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
  const isValidPassword = await Bun.password.verify(password, user.password);
  if (!isValidPassword) {
    res.status(401).json({ error: 'Contraseña incorrecta' });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.SCANTEATE_JSON_SECRET,
    { expiresIn: '30d' }
  );
  res.json({ user, token })
};
