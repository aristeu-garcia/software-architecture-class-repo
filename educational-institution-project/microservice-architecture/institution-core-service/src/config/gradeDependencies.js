import { InMemoryGradeRepository } from "../infrastructure/InMemoryGradeRepository.js";
import { studentRepository } from "./studentDependencies.js";
import { subjectRepository } from "./subjectDependencies.js";
import { CreateGradeUseCase } from "../domain/grade/use-case/CreateGrade.js";
import { CreateGradeController } from "../controllers/CreateGradeController.js";
import { GenerateReportUseCase } from "../domain/grade/use-case/GenerateReport.js";
import { GenerateReportController } from "../controllers/GenerateReportController.js";

const gradeRepository = new InMemoryGradeRepository();
const createGradeUseCase = new CreateGradeUseCase(gradeRepository, studentRepository, subjectRepository);
const createGradeController = new CreateGradeController(
  createGradeUseCase
);

const generateReportUseCase = new GenerateReportUseCase(gradeRepository);
const generateReportController = new GenerateReportController(
  generateReportUseCase
);

export { createGradeController, generateReportController, subjectRepository };
