import { Router } from "express";
import {getUsers, saveUser, suma} from '../controllers/users.controller.js';

const router = Router();

router.get("/", getUsers);
router.post("/", saveUser);
router.get("/", suma);
export default router;