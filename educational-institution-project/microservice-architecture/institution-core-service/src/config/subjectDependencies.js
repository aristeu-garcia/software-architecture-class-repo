import { InMemorySubjectRepository } from "../infrastructure/InMemorySubjectRepository.js";
import { teacherRepository } from "./teacherDependencies.js"; 
import { CreateSubjectUseCase } from "../domain/subject/use-case/CreateSubject.js";
import { CreateSubjectController } from "../controllers/CreateSubjectController.js";

const subjectRepository = new InMemorySubjectRepository();
const createSubjectUseCase = new CreateSubjectUseCase(subjectRepository, teacherRepository);
const createSubjectController = new CreateSubjectController(
  createSubjectUseCase
);

export { createSubjectController };
