import { Teacher } from "../entities/teacher.js";

export class CreateTeacherUseCase {
  constructor(teacherRepository) {
    this.teacherRepository = teacherRepository;
  }

  async execute({ name, email }) {
    const existingTeacher = await this.teacherRepository.findByEmail(email);
    if (existingTeacher) {
      throw new Error('Teacher with this email already exists');
    }
    
    const id = Math.random().toString().split(".")[1];
    const teacher = new Teacher({ id, name, email });

    await this.teacherRepository.save(teacher);
    console.log("[LOGGER] Teacher created successfully");
    return teacher;
  }
}
