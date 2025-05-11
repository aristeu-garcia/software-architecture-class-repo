import express from "express";
import studentRoutes from "../routes/studentRoutes.js";
import teacherRoutes from "../routes/teacherRoutes.js";

const app = express();
app.use(express.json());
app.use("/students", studentRoutes);
app.use("/teaches", teacherRoutes)

export { app };
