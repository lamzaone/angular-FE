import { Injectable } from '@angular/core';
import { User, UserService } from './user.service';
import { Activity, ActivityService } from './activity.service';
import { Enrollment, EnrollmentsService } from './enrollments.service';

export class Session {
  user: number;
  activity: number;
  date: string;
  attended: boolean;

  constructor(id_user: number, id_activity: number, date: string, attended: boolean) {
    this.user = id_user;
    this.activity = id_activity;
    this.date = date;
    this.attended = attended;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessions: Session[] = [
    // {
    //   id_user: 3,
    //   id_activity: 1,
    //   date: '02/08/23',
    //   attended: true
    // },
    // {
    //   id_user: 4,
    //   id_activity: 1,
    //   date: '02/08/23',
    //   attended: true
    // },
    // {
    //   id_user: 5,
    //   id_activity: 1,
    //   date: '02/08/23',
    //   attended: true
    // },
    // {
    //   id_user: 6,
    //   id_activity: 1,
    //   date: '02/08/23',
    //   attended: true
    // }
  ];

  users: User[] = this.userService.getAllUsers();

  activities: Activity[] = this.activityService.getActivities();

  enrollments: Enrollment[] = this.enrollmentsService.getAllEnrollments();

  constructor(private userService:UserService, private activityService:ActivityService, private enrollmentsService:EnrollmentsService) { }

  createSessionsForActivity(activityId: number) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = String(today.getFullYear()).substr(-2);
    const todayDate = `${dd}/${mm}/${yy}`;


    const usersInActivity = this.getUsersByActivityId(activityId);

    for (const user of usersInActivity) {
      const session = new Session(user.id, activityId, todayDate, false);
      this.sessions.push(session);
    }
  }

  getSessionsForCurrentActivity(activityId: number) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yy = String(today.getFullYear()).substr(-2);
    const todayDate = `${dd}/${mm}/${yy}`;
    console.log (todayDate);

    return this.sessions.filter(session => session.activity === activityId && session.date === todayDate);
  }

  private getUsersByActivityId(activityId: number): User[] {
    const enrolledTeams = this.enrollments.filter(enrollment => enrollment.id_activity === activityId);
    const enrolledTeamIds = enrolledTeams.map(enrollment => enrollment.id_team);

    return this.users.filter(user => enrolledTeamIds.includes(user.id_team!));
  }

  getActivitiesWithSessionsForToday(): Activity[] {
    const todayDate = this.getFormattedDate(new Date());
    const activities = this.activityService.getActivities();
    const activitiesWithSessionsForToday = activities.filter((activity) => {
      return this.sessions.some((session) => session.activity === activity.id && session.date === todayDate);
    });

    return activitiesWithSessionsForToday;
  }

  private getFormattedDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }


}
