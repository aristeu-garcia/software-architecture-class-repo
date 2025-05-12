export class Grade {
  constructor({ id, student, subject, bimester, value }) {
    if (!student) throw new Error("Student is required");
    if (!subject) throw new Error("Subject is required");
    if (!bimester) throw new Error("Bimester is required");

    this.id = id;
    this.student = student;
    this.subject = subject;
    this.bimester = bimester;
    this.value = value || 0.0;
  }
}
