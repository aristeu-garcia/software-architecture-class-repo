import { Router } from "express";
import { createTeacherController } from "../../config/teacherDependencies.js";

const router = Router();

router.post("/", (req, res) => createTeacherController.handle(req, res));

export default router;
