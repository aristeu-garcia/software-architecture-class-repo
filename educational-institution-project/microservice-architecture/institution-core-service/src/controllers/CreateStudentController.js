export class CreateStudentController {
    constructor(createStudentUseCase) {
      this.createStudentUseCase = createStudentUseCase;
    }
  
    async handle(request) {
      try {
        const student = await this.createStudentUseCase.execute(request);
        return { status: 201, body: student };
      } catch (error) {
        return { status: 400, body: { error: error.message } };
      }
    }
  }
  