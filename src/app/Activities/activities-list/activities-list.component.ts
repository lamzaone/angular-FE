import { Enrollment, EnrollmentsService } from './../../services/enrollments.service';
import { Component } from '@angular/core';
import { Activities } from 'src/app/activities';
import { TeamService } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent {
  currentUser!: User; // Initialize to null or provide a default User object
  isLeader:boolean;
  currentTeamEnrollments: Activities[] = [];

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private enrollmentsService: EnrollmentsService,
  ) {
    this.currentUser = userService.getCurrentUser()!; // Non-null assertion here
    this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
    this.currentTeamEnrollments = enrollmentsService.getTeamEnrollments(this.currentUser.id_team!);
    
    console.log(this.isLeader);
  }
  
}


