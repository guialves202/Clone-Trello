import { Router } from 'express';
import UserController from './app/controllers/userController.js';

const router = Router();

router.post('/signup', UserController.store)

export default router;
