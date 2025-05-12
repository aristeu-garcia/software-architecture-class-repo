export class CreateGradeController {
  constructor(createGradeUseCase) {
    this.createGradeUseCase = createGradeUseCase;
  }

  async handle(request, response) {
    try {
      const grade = await this.createGradeUseCase.execute(request.body);
      return response.status(201).json(grade);
    } 
    catch (error) {
      console.log(`[LOGGER] ${error}`);
      return response.status(400).json({ error: error.message });
    }
  }
}
