import { Router } from "express";
import { fakeUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/test/user", fakeUser);

export default router;