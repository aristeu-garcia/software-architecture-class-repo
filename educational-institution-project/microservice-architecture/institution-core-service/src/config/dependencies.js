import { InMemoryStudentRepository } from "../infrastructure/repositories/InMemoryStudentRepository.js";
import { CreateStudent } from "../application/student/use-cases/CreateStudent.js";
import { CreateStudentController } from "../infrastructure/web/controllers/CreateStudentController.js";

const studentRepository = new InMemoryStudentRepository();
const createStudentUseCase = new CreateStudent(studentRepository);
const createStudentController = new CreateStudentController(
  createStudentUseCase
);

export { createStudentController };
