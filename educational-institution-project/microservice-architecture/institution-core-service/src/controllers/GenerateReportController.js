export class GenerateReportController {
  constructor(generateReportUseCase) {
    this.generateReportUseCase = generateReportUseCase;
  }

  async handle(request, response) {
    try {
      const report = await this.generateReportUseCase.execute(request.query);
      return response.status(201).json(report);
    } 
    catch (error) {
      console.log(`[LOGGER] ${error}`);
      return response.status(400).json({ error: error.message });
    }
  }
}
