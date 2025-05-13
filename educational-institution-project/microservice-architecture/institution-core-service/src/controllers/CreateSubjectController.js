export class CreateSubjectController {
  constructor(createSubjectUseCase) {
    this.createSubjectUseCase = createSubjectUseCase;
  }

  async handle(request, response) {
    try {
      const subject = await this.createSubjectUseCase.execute(request.body);
      return response.status(201).json(subject);
    } 
    catch (error) {
      console.log(`[LOGGER] ${error}`);
      return response.status(400).json({ error: error.message });
    }
  }
}
