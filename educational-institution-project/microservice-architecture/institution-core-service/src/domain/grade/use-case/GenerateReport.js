export class GenerateReportUseCase {
  constructor(gradeRepository) {
    this.gradeRepository = gradeRepository;
  }

  async execute({ student }) {
    const existingGrades = await this.gradeRepository.findByStudent(student);
    if (existingGrades.length === 0) {
      throw new Error('There are no grades for this student');
    }
    
    const subjects = this.getSubjects(existingGrades);
    const report = {}

    for (const subject of subjects) {
      const bimesters = existingGrades
        .filter(grade => grade.subject === subject)
        .map(grade => ({
          bimester: grade.bimester,
          value: grade.value,
        }));
      
      report[subject] = bimesters;
    }

    console.log("[LOGGER] Report generated successfully");
    return report;
  }

  getSubjects(grades) {
    const subjects = grades.map((grade) => grade.subject);
    return new Set(subjects);
  }
}
