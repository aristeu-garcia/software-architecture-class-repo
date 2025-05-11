import { InMemoryTeacherRepository } from "../infrastructure/InMemoryTeacherRepository.js";
import { CreateTeacherUseCase } from "../domain/teacher/use-case/CreateTeacher.js";
import { CreateTeacherController } from "../controllers/CreateTeacherController.js";

const teacherRepository = new InMemoryTeacherRepository();
const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository);
const createTeacherController = new CreateTeacherController(
  createTeacherUseCase
);

export { createTeacherController, teacherRepository };
