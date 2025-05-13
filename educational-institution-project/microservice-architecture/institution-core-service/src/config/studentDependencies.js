import { InMemoryStudentRepository } from "../infrastructure/InMemoryStudentRepository.js";
import { CreateStudentUseCase } from "../domain/student/use-case/CreateStudent.js";
import { CreateStudentController } from "../controllers/CreateStudentController.js";

const studentRepository = new InMemoryStudentRepository();
const createStudentUseCase = new CreateStudentUseCase(studentRepository);
const createStudentController = new CreateStudentController(
  createStudentUseCase
);

export { createStudentController, studentRepository };
