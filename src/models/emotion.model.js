import { DataTypes } from 'sequelize';
import database from '../config/database';

const Emotion = database.define('Emotion', {
  name: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  uri: {
    type: DataTypes.STRING,
  },
});

export default Emotion;
