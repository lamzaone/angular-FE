import { Component, Input } from '@angular/core';
import { GradesService } from 'src/app/services/grades.service';
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
  message: string = '';
  currentUser?:User;
  grade: number = 0;

  constructor (private userService:UserService, private teamService:TeamService, private gradesService:GradesService) {};

  ngOnInit() {
    this.selectedUser = this.userService.getUserById(this.session.id_user)!;
    this.currentUser =  this.userService.getCurrentUser()!;
    this.userTeamName = this.teamService.getTeamById(this.selectedUser.id_team!)?.team_name;
  }

  onAttendanceClick(){
    this.session.attended = !this.session.attended;
  }

  onGradeClick(){
    if (this.grade > 0 && this.grade <= 10){
      this.gradesService.addGrade(this.session.id_user, this.session.id_activity, this.session.date,this.currentUser!.id, this.grade, this.message);
      alert('User graded!');
      this.grade = 0;
      this.message = '';
    }
    else alert('GRADE MUST BE BETWEEN 0 AND 10!');

  }
}
