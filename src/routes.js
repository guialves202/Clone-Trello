import { Router } from 'express';
import userController from './app/controllers/userController.js';

const router = Router();

router.post('/signup', userController.store)

export default router;
