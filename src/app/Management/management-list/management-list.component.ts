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
  selectedActivity?: Activity;
  title:string = 'All teams'
  activities!: Activity[]
  users: User[]; 
  allUsers?: User[];
  teamId: number | null = null;
  currentUser: User | null; 
  username: string = '';

  activityName:string | null = null;
  activityId:number | null = null;

  containerPosition = 0; 
  open:boolean = true;
  symbol:string = '<<';

  groupedUsers: { [teamId: string]: User[] } = {};
  groupedUsersArray: User[][] = [];
  allStudents:boolean = false;
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
    
    this.groupedUsers = {};
  }
  


  onClick(selectedActivity:Activity,activityId:number, activityName:string){
    this.title = activityName;
    this.activityName = activityName;
    this.activityId = activityId;
    this.selectedActivity = selectedActivity;
    this.selectedActivityTeams = null;
    this.selectedActivityTeams = this.enrollmentsService.getTeamsEnrolledInActivity(activityId);
  };

  onClickAll(){
    this.title = 'All teams';
    this.activityId = null;
    this.activityName = null;
    this.selectedActivity = undefined;
    this.selectedActivityTeams = this.teamService.getTeams();
    this.allStudents = false;
  };

  onClickAllStudents(){
    this.allStudents = true;
    this.title = 'All users';
    this.selectedActivity = undefined;
    this.selectedActivityTeams = null;
    this.allUsers = this.userService.getAllUsers();
    console.log(this.allUsers);

    if (this.allUsers) {
      this.groupedUsers = this.allUsers.reduce((groups, user) => {
        const teamId = user.id_team !== null ? user.id_team.toString() : 'No Team';

        if (!groups[teamId]) {
          groups[teamId] = [];
        }

        groups[teamId].push(user);
        return groups;
      }, {} as { [teamId: string]: User[] });

      this.groupedUsersArray = Object.values(this.groupedUsers);
    }

    console.log(this.groupedUsers, '+', this.groupedUsersArray);
  }

  onTeamClick(teamid:number, teamName:string){
    this.title = this.activityName ? '['+this.activityName+'] ' + teamName : teamName;
    this.selectedActivityTeams = null;
    this.users = this.userService.getUsersByTeamId(teamid);
    this.allStudents = false;
    
  }

  onClickCreateActivity() {
    
  }
  
}
