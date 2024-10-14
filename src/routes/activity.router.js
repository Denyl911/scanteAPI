import { Router } from 'express';
import * as activityController from '../controllers/activity.cotroller.js';
import authenticate from '../middlewares/auth.js';

const activityRouter = Router();

activityRouter.get('/', activityController.getAllActivitys);
activityRouter.get('/:id', activityController.getActivityById);
activityRouter.post('/', activityController.createActivity)
activityRouter.put('/:id', activityController.updateActivity);
activityRouter.delete('/:id', authenticate, activityController.deleteActivity);

export default activityRouter;