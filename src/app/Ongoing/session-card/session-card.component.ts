import { Component, Input } from '@angular/core';
import { Session } from 'src/app/services/session.service';
import { TeamService } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})
export class SessionCardComponent {
  @Input() session!: Session;
  selectedUser?:User;
  userTeamName?:string;

  constructor (private userService:UserService, private teamService:TeamService) {};

  ngOnInit() {
    this.selectedUser = this.userService.getUserById(this.session.id_user)!;
    this.userTeamName = this.teamService.getTeamById(this.selectedUser.id_team!)?.team_name;
  }

  onAttendanceClick(){
    this.session.attended = !this.session.attended;
  }
}
