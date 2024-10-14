import { Sequelize } from 'sequelize';

const database = new Sequelize(
  process.env.SCANTEATE_DB_NAME,
  process.env.SCANTEATE_DB_USER,
  process.env.SCANTEATE_DB_PASS,
  {
    host: process.env.SCANTEATE_DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

export default database;
