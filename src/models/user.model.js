import { DataTypes } from 'sequelize';
import database from '../config/database';

const User = database.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  psicoEmail: {
    type: DataTypes.STRING,
  },
  autoReport: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
});

export default User;
