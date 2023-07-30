import { Injectable } from '@angular/core';
export class Grade{
  id_user: number;
  id_activity: number;
  date: string;
  id_mentor: number;
  grade: number;
  comment: string;

  constructor(id_user: number, id_activity: number, date: string, id_mentor: number, grade: number, comment: string) {
    this.id_user = id_user;
    this.id_activity = id_activity;
    this.date = date;
    this.id_mentor = id_mentor;
    this.grade = grade;
    this.comment = comment;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private grades: Grade[] = [
    new Grade(4, 1, '2023-07-30', 5, 90, 'Great work!'),
    new Grade(4, 1, '2023-07-31', 5, 85, 'Well done!'),
    new Grade(4, 1, '2023-08-01', 6, 95, 'Excellent job!'),
  ];

  constructor() {}

  // Add methods to interact with Grade data here, e.g., CRUD operations.

  // Method to get grades by specific activity ID and user ID
  getGradesByActivityAndUser(activityId: number, userId: number): Grade[] {
    return this.grades.filter(
      (grade) => grade.id_activity === activityId && grade.id_user === userId
    );
  }
}
