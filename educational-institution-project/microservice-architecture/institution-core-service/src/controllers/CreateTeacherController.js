export class CreateTeacherController {
  constructor(createTeacherUseCase) {
    this.createTeacherUseCase = createTeacherUseCase;
  }

  async handle(request, response) {
    try {
      const teacher = await this.createTeacherUseCase.execute(request.body);
      return response.status(201).json(teacher);
    } 
    catch (error) {
      console.log(`[LOGGER] ${error}`);
      return response.status(400).json({ error: error.message });
    }
  }
}
