import { Enrollment, EnrollmentsService } from './../../services/enrollments.service';
import { Component } from '@angular/core';
import { Activity } from 'src/app/services/activity.service';
import { TeamService } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent {
  currentUser!: User; 
  isLeader:boolean;
  currentTeamEnrollments: Activity[] = [];

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private enrollmentsService: EnrollmentsService,
  ) {
    this.currentUser = userService.getCurrentUser()!;
    this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
    this.currentTeamEnrollments = enrollmentsService.getTeamEnrollments(this.currentUser.id_team!);
    
    console.log(this.isLeader);
  }
  
}


