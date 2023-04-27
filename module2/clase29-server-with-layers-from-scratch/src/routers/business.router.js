import { Router } from "express";
import {getBusiness, getBusinessById, saveBusiness} from '../controllers/business.controller.js';

const router = Router();

router.get("/", getBusiness);
router.post("/", saveBusiness);
router.get("/:uid", getBusinessById);

export default router;