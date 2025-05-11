import { SubjectRepository } from "../domain/subject/repositories/SubjectRepository.js"; 

export class InMemorySubjectRepository extends SubjectRepository {
  constructor() {
    super();
    this.subjects = [];
  }

  async save(subject) {
    this.subjects.push(subject);
  }

  async findByName(name) {
    return this.subjects.find((sb) => sb.name === name);
  }
}
