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
    new Grade(4, 1, '21/07/23', 1, 9.8, 'Great work!'),
    new Grade(4, 1, '25/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!Excellent job!Excellent job!Excellent job!Excellent job!Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5,  'Excellent job!'),
    new Grade(4, 2, '26/07/23', 1, 2.5, 'Well done!'),
    new Grade(4, 2, '21/07/23', 1, 1.5, 'Excellent job!'),
    new Grade(4, 2, '26/07/23', 1, 3.5, 'Well done!'),
    new Grade(4, 2, '21/07/23', 1, 4.5, 'Excellent job!'),
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
