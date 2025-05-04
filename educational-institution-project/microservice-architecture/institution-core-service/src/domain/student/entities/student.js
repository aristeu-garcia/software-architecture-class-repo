export class Student {
  constructor({ id, name, email, enrollmentDate }) {
    if (!name || !email) throw new Error("Name and email are required");

    this.id = id;
    this.name = name;
    this.email = email;
    this.enrollmentDate = enrollmentDate || new Date();
  }
}
