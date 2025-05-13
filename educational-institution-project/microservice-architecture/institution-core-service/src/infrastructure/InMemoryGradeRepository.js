import { GradeRepository } from '../domain/grade/repositories/GradeRepository.js';

export class InMemoryGradeRepository extends GradeRepository {
  constructor() {
    super();
    this.grades = [];
  }

  async save(student) {
    this.grades.push(student);
  }

  async findByStudent(student) {
    return this.grades.filter((g) => g.student === student);
  }
}
