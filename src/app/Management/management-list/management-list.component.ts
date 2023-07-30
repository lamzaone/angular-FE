import { EnrollmentsService } from './../../services/enrollments.service';
import { TeamService } from './../../services/team.service';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Activity, ActivityService } from 'src/app/services/activity.service';
import { Team } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})

export class ManagementListComponent {
  selectedActivityTeams: Team[] | null = this.teamService.getTeams();
  title:string = 'All teams'
  activities!: Activity[]
  users: User[];
  teamId: number | null = null;
  currentUser: User | null; 
  username: string = '';

  containerPosition = 0; 
  open:boolean = true;
  symbol:string = '<<';
    moveContainerLeft() {
    if (this.open){
      this.containerPosition -= 20; ;
      
      this.symbol = '>>';
      this.open = !this.open;
    }
    else {
      this.containerPosition += 20; 
      this.open = !this.open;
      this.symbol = '<<';
    }
  }

  constructor( 
    private teamService:TeamService, 
    private enrollmentsService:EnrollmentsService,
    private userService: UserService,
    private activityService: ActivityService)
    {
      this.activities = activityService.getActivities();
      this.currentUser = this.userService.getCurrentUser(); 
    if (this.currentUser != null){
      this.teamId = this.currentUser.id_team;
    }
    this.users = this.userService.getAllUsers().filter((user => user.id_team === this.teamId));
    }


  onClick(activityID:number, activityName:string){
    this.title = activityName;
    this.selectedActivityTeams = null;
    this.selectedActivityTeams = this.enrollmentsService.getTeamsEnrolledInActivity(activityID);
  };

  onClickAll(){
    this.title = 'All teams';
    this.selectedActivityTeams = this.teamService.getTeams();
  };

  onTeamClick(teamid:number, name:string){
    this.title = name;
    this.selectedActivityTeams = null;
    this.users = this.userService.getUsersByTeamId(teamid);
    
  }



}
