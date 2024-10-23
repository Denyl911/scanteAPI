import { Router } from 'express';
import * as userController from '../controllers/users.controller.js';
import authenticate from '../middlewares/auth.js';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/emotions/:id', userController.getAllUserEmotions)
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.post('/emotions', userController.saveEmotion)
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/emotions/:id', userController.deleteEmotion)
userRouter.delete('/:id', authenticate, userController.deleteUser);

export default userRouter;