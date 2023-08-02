import { Injectable } from '@angular/core';
export class Grade{
  userID: number;
  activityID: number;
  date: string;
  mentorID: number;
  grade: number;
  comment: string;

  constructor(id_user: number, id_activity: number, date: string, id_mentor: number, grade: number, comment: string) {
    this.userID = id_user;
    this.activityID = id_activity;
    this.date = date;
    this.mentorID = id_mentor;
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
    new Grade(4, 1, '25/07/23', 1, 4.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!Excellent job!Excellent job!Excellent job!Excellent job!Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 2.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 3.5, 'Excellent job!'),
    new Grade(4, 1, '26/07/23', 1, 8.5, 'Well done!'),
    new Grade(4, 1, '21/07/23', 1, 9.5,  'Excellent job!'),
    new Grade(4, 2, '26/07/23', 1, 2.5, 'Well done!'),
    new Grade(4, 2, '21/07/23', 1, 1.5, 'Excellent job!'),
    new Grade(4, 2, '26/07/23', 1, 3.5, 'Well done!'),
    new Grade(4, 2, '21/07/23', 1, 4.5, 'Excellent job!'),
  ];

  constructor() {}




  getGradesByActivityAndUser(activityId: number, userId: number): Grade[] {
    return this.grades.filter(
      (grade) => grade.activityID === activityId && grade.userID === userId
    );
  }

  addGrade(id_user: number,id_activity: number, date: string,id_mentor: number,grade: number,comment: string) {
    const newGrade = new Grade(id_user, id_activity, date, id_mentor, grade, comment);
    this.grades.push(newGrade);
  }
}
