import { Router } from 'express';
import { contactController } from '../controllers/contact.controller.js';

const router = Router();

router.post("/contact", contactController);

export default router;