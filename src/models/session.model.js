import { DataTypes } from 'sequelize';
import database from '../config/database';

const Session = database.define('Session', {
  start: {
    type: DataTypes.DATE,
  },
  end: {
    type: DataTypes.DATE,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  device: {
    type: DataTypes.STRING,
  }
});

export default Session;
