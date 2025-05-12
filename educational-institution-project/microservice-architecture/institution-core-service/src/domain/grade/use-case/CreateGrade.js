import { Grade } from "../entities/grade.js";

export class CreateGradeUseCase {
  constructor(gradeRepository, studentRepository, subjectRepository) {
    this.gradeRepository = gradeRepository;
    this.studentRepository = studentRepository;
    this.subjectRepository = subjectRepository;
  }

  async execute({ student, subject, bimester, value }) {
    const existingStudent = await this.studentRepository.findByEmail(student);
    if (!existingStudent) {
      throw new Error('Student with this email does not exist');
    }

    const existingSubject = await this.subjectRepository.findByName(subject);
    if (!existingSubject) {
      throw new Error('Subject with this name does not exist');
    }

    const id = Math.random().toString().split(".")[1];
    const grade = new Grade({ id, student, subject, bimester, value });
    
    await this.gradeRepository.save(grade);
    console.log("[LOGGER] Grade created successfully");
    return grade;
  }
}
