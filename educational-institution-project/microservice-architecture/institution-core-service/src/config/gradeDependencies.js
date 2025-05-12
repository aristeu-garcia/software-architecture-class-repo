import { InMemoryGradeRepository } from "../infrastructure/InMemoryGradeRepository.js";
import { studentRepository } from "./studentDependencies.js";
import { subjectRepository } from "./subjectDependencies.js";
import { CreateGradeUseCase } from "../domain/grade/use-case/CreateGrade.js";
import { CreateGradeController } from "../controllers/CreateGradeController.js";

const gradeRepository = new InMemoryGradeRepository();
const createGradeUseCase = new CreateGradeUseCase(gradeRepository, studentRepository, subjectRepository);
const createGradeController = new CreateGradeController(
  createGradeUseCase
);

export { createGradeController, subjectRepository };
