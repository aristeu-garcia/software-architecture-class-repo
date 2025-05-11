import { Router } from "express";
import { createStudentController } from "../../config/studentDependencies.js";

const router = Router();

router.post("/", (req, res) => createStudentController.handle(req, res));

export default router;
