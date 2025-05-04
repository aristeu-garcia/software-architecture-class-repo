import { StudentRepository } from "../domain/student/repositories/StudentRepository.js";

export class InMemoryStudentRepository extends StudentRepository {
  constructor() {
    super();
    this.students = [];
  }

  async save(student) {
    this.students.push(student);
  }

  async findByEmail(email) {
    return this.students.find((s) => s.email === email);
  }
}
