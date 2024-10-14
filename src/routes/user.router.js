import { Router } from 'express';
import * as userController from '../controllers/users.controller.js';
import authenticate from '../middlewares/auth.js';

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', authenticate, userController.deleteUser);

export default userRouter;