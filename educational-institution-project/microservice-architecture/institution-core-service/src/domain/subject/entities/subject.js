export class Subject {
  constructor({ id, name, teacher, students }) {
    if (!name) throw new Error("Name is required");
    if (!teacher) throw new Error("Teacher is required");

    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.students = students || [];
  }
}
