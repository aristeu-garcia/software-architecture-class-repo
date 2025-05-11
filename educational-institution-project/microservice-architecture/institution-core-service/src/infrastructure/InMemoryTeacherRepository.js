import { TeacherRepository } from "../domain/teacher/repositories/TeacherRepository.js"; 

export class InMemoryTeacherRepository extends TeacherRepository {
  constructor() {
    super();
    this.teachers = [];
  }

  async save(teacher) {
    this.teachers.push(teacher);
  }

  async findByEmail(email) {
    return this.teachers.find((t) => t.email === email);
  }
}
