import { logger } from "../config/loggerDependencies.js";

export class CreateStudentController {
  constructor(createStudentUseCase) {
    this.createStudentUseCase = createStudentUseCase;
  }

  async handle(request, response) {
    try {
      const student = await this.createStudentUseCase.execute(request.body);
      logger.info(`Student created: ${JSON.stringify(student)}`);
      return response.status(201).json(student);
    } catch (error) {
      logger.error(`An error occurred: ${error.message}`);
      return response.status(400).json({ error: error.message });
    }
  }
}
