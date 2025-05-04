import { Router } from "express";
import { createStudentController } from "../../../config/dependencies.js";

const router = Router();

router.post("/", (req, res) => createStudentController.handle(req, res));

export default router;
