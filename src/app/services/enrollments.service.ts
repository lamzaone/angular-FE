import { Activities } from './../activities';
import { Injectable } from '@angular/core';
import { Team, TeamService } from './team.service';
import { ActivityService } from './activity.service';
import { skip } from 'rxjs';

export class Enrollment{
  id_team:number;
  id_activity:number;

  constructor (id_team:number, id_activity:number){
    this.id_team = id_team;
    this.id_activity = id_activity;

  }
}


@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  enrollments: Enrollment[] = [
    {
      id_team: 1,
      id_activity: 1,
    },
    {
      id_team: 2,
      id_activity: 1,
    },
    {
      id_team: 2,
      id_activity: 2,
    },
    
  ]

  constructor(private teamService:TeamService, private activityService:ActivityService) { }

  addEnrollment(id_team: number, id_activity: number): void {
    this.enrollments.push({ id_team, id_activity });
  }

  // Method to get all enrollments
  getAllEnrollments(): Enrollment[] {
    return this.enrollments;
  }

  // Method to get enrollments by team ID
  getEnrollmentsByTeamId(id_team: number): Enrollment[] {
    return this.enrollments.filter(enrollment => enrollment.id_team === id_team);
  }

  // Method to get enrollments by activity ID

  getTeamsEnrolledInActivity(id_activity: number): Team[] {
    const enrollmentsForActivity = this.enrollments.filter(enrollment => enrollment.id_activity === id_activity);
    const teams: Team[] = this.teamService.getTeams();
    const teamsEnrolled: Team[] = [];
  
    for (const enrollment of enrollmentsForActivity) {
      const team = teams.find(t => t.id_team === enrollment.id_team);
      if (team) {
        teamsEnrolled.push(team);
      }
    }
  
    return teamsEnrolled;
  }

  getTeamEnrollments(id_team: number): Activities[]{
    const teamActivities:Activities[] = [];
    const teamEnrollments:Enrollment[] = this.enrollments.filter(enrollment => enrollment.id_team === id_team);
    const allActivities:Activities[] = this.activityService.getActivities();

    for (var enrollment of teamEnrollments){
      for (var activity of allActivities){
        if (activity.id == enrollment.id_activity) teamActivities.push(activity);
      }
    }

    return teamActivities;
  }
}
