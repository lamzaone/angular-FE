import { Component, Input, SimpleChanges } from '@angular/core';
import { User , UserService } from 'src/app/services/user.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() currentUser: User | null;
  @Input() user!: User;
  isLeader?: boolean;
  otherIsLeader?: boolean;
  
  

  constructor(private teamService: TeamService, private userService:UserService){
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


}