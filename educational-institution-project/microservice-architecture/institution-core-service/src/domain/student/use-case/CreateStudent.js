import { Student } from "../entities/student.js";
import crypto from 'node:crypto';
export class CreateStudentUseCase {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute({ name, email }) {

    const existingStudent = await this.studentRepository.findByEmail(email);
    if (existingStudent) {
      throw new Error('Student with this email already exists');
    }
    const student = new Student({ id: Math.random().toString(), name, email });

    await this.studentRepository.save(student);
    return student;
  }
}
