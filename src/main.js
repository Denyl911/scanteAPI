import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import helmet from "helmet";
import database from './config/database';
import userRouter from './routes/user.router';
import './models/associations';
import seessionRouter from './routes/session.router';
import activityRouter from './routes/activity.router';

const app = express();
const PORT = process.env.SCANTEATE_API_PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/sessions', seessionRouter);
app.use('/activities', activityRouter);

app.listen(PORT, async () => {
  try {
    await database.authenticate();
    await database.sync({ alter: true });
    console.log('DB connection has been established successfully.');
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  } catch (e) {
    console.log('Unable to connect to the database: ', e);
  }
});
