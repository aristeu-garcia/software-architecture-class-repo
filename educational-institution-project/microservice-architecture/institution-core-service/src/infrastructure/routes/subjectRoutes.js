import { Router } from "express";
import { createSubjectController } from "../../config/subjectDependencies.js";

const router = Router();

router.post("/", (req, res) => createSubjectController.handle(req, res));

export default router;
