import { InMemoryStudentRepository } from "../infrastructure/InMemoryStudentRepository.js";
import { CreateStudentUseCase } from "../domain/student/use-case/CreateStudent.js";
import { CreateStudentController } from "../controllers/CreateStudentController.js";
import WebSocketLogger from "../infrastructure/logger/WebSocketLogger.js";

const logger = new WebSocketLogger("ws://localhost:8081");
const studentRepository = new InMemoryStudentRepository();
const createStudentUseCase = new CreateStudentUseCase(studentRepository);
const createStudentController = new CreateStudentController(
  createStudentUseCase
);

export { createStudentController, logger };
