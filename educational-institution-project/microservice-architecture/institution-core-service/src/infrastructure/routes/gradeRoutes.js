import { Router } from "express";
import { createGradeController, generateReportController } from "../../config/gradeDependencies.js";

const router = Router();

router.post("/", (req, res) => createGradeController.handle(req, res));
router.get("/report", (req, res) => generateReportController.handle(req, res));

export default router;
