import { Component, Input } from '@angular/core';
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

  constructor(private teamService: TeamService, private userService:UserService){
    this.currentUser = this.userService.getCurrentUser();
    this.isLeader = this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id);
    console.log(this.teamService.isCurrentUserLeaderOfTeam(this.currentUser?.id_team, this.currentUser?.id));
    
    console.log(this.teamService.isCurrentUserLeaderOfTeam(2,4));
    console.log(this.teamService.isCurrentUserLeaderOfTeam(4,2));
    console.log(this.currentUser);
    console.log(this.currentUser?.id_team);
  };
}
