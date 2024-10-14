import { DataTypes } from 'sequelize';
import database from '../config/database';

const Activity = database.define('Activity', {
  type: {
    type: DataTypes.STRING,
  },
  start: {
    type: DataTypes.DATE,
  },
  end: {
    type: DataTypes.DATE,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
});

export default Activity;
