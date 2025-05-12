import { Router } from "express";
import { createGradeController } from "../../config/gradeDependencies.js";

const router = Router();

router.post("/", (req, res) => createGradeController.handle(req, res));

export default router;
