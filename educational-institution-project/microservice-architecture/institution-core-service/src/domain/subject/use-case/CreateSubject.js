import { Subject } from "../entities/subject.js";

export class CreateSubjectUseCase {
  constructor(subjectRepository, teacherRepository) {
    this.subjectRepository = subjectRepository;
    this.teacherRepository = teacherRepository;
  }

  async execute({ name, teacher }) {
    const existingSubject = await this.subjectRepository.findByName(name);
    if (existingSubject) {
      throw new Error('Subject with this name already exists');
    }
    
    const existingTeacher = await this.teacherRepository.findByEmail(teacher);
    if (!existingTeacher) {
      throw new Error('Teacher with this email does not exist');
    }

    const id = Math.random().toString().split(".")[1];
    const subject = new Subject({ id, name, teacher });
    
    await this.subjectRepository.save(subject);
    console.log("[LOGGER] Subject created successfully");
    return subject;
  }
}
