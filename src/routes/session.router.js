import { Router } from 'express';
import * as sessionController from '../controllers/session.controller.js';
import authenticate from '../middlewares/auth.js';

const seessionRouter = Router();

seessionRouter.get('/', sessionController.getAllSessions);
seessionRouter.get('/:id', sessionController.getSessionById);
seessionRouter.post('/', sessionController.createSession)
seessionRouter.put('/:id', sessionController.updateSession);
seessionRouter.delete('/:id', authenticate, sessionController.deleteSession);

export default seessionRouter;