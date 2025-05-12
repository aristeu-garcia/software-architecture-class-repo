import express from "express";
import studentRoutes from "../routes/studentRoutes.js";
import teacherRoutes from "../routes/teacherRoutes.js";
import subjectRoutes from "../routes/subjectRoutes.js";
import gradeRoutes from "../routes/gradeRoutes.js";

const app = express();
app.use(express.json());
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/subjects", subjectRoutes);
app.use("/grades", gradeRoutes);

export { app };
