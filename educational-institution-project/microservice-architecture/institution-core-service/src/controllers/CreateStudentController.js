export class CreateStudentController {
  constructor(createStudentUseCase) {
    this.createStudentUseCase = createStudentUseCase;
  }

  async handle(request, response) {
    try {

      const student = await this.createStudentUseCase.execute(request.body);
      return response.status(201).json(student);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
