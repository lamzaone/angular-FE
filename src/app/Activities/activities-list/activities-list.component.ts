import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/services/activity.service';
import { TeamService } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';
import { Enrollment, EnrollmentsService } from 'src/app/services/enrollments.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnDestroy {
  currentUser!: User; 
  isLeader: boolean;
  currentTeamEnrollments: Activity[] = [];
  private enrollmentsSubscription: Subscription;

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private enrollmentsService: EnrollmentsService,
  ) {
    this.currentUser = userService.getCurrentUser()!;
    this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
    this.currentTeamEnrollments = enrollmentsService.getTeamEnrollments(this.currentUser.id_team!);
    
    console.log(this.isLeader);


    this.enrollmentsSubscription = this.enrollmentsService.enrollments$.subscribe((enrollments: Enrollment[]) => {
      this.currentTeamEnrollments = enrollmentsService.getTeamEnrollments(this.currentUser.id_team!);
    });
  }

  ngOnDestroy() {
    this.enrollmentsSubscription.unsubscribe();
  }
}
