import { Component, Input, SimpleChanges } from '@angular/core';
import { User , UserService } from 'src/app/services/user.service';
import { TeamService } from 'src/app/services/team.service';
import { Activity, ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() currentUser: User | null;
  @Input() user!: User;
  @Input() selectedActivity?: Activity;
  isLeader?: boolean;
  seeGrades: boolean = false;
  otherIsLeader?: boolean;
  

  constructor(private teamService: TeamService, private userService:UserService, private activityService:ActivityService){
    this.currentUser = this.userService.getCurrentUser();
    this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
  };

  ngOnChanges(changes: SimpleChanges) {
    if ('user' in changes || 'currentUser' in changes) {
      this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
      this.otherIsLeader = this.teamService.isCurrentUserLeaderOfTeam(this.user.id_team, this.user?.id);
      console.log('isLeader:', this.isLeader);
      console.log('otherIsLeader:', this.otherIsLeader);
    }
  }

  onClick(){
    this.seeGrades = !this.seeGrades;
  }

  doNothing(){}

}