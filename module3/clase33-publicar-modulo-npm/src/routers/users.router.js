import { Router } from "express";
import {getUsers, suma} from '../controllers/users.controller.js';

const router = Router();

router.get("/", getUsers);
router.post("/suma", suma);

export default router;