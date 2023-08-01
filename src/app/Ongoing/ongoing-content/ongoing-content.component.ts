import { Component } from '@angular/core';
import { Activity, ActivityService } from 'src/app/services/activity.service';
import { EnrollmentsService } from 'src/app/services/enrollments.service';
import { Session, SessionService } from 'src/app/services/session.service';
import { Team, TeamService } from 'src/app/services/team.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ongoing-content',
  templateUrl: './ongoing-content.component.html',
  styleUrls: ['./ongoing-content.component.scss']
})
export class OngoingContentComponent {
  

  title:string = 'Select/start a session!'
  activities!: Activity[]
  users: User[];
  teamId: number | null = null;
  currentUser: User | null; // Property to hold the current user.
  username: string = '';
  session?: Session[];

  selectedActivity?: Activity;

  containerPosition = 0; // Initial position value (0 means no movement)
  open:boolean = true;
  symbol:string = '<<';
    moveContainerLeft() {
    if (this.open){
      this.containerPosition -= 20; // Move the container 80px to the left;
      
      this.symbol = '>>';
      this.open = !this.open;
    }
    else {
      this.containerPosition += 20; // Move the container 80px to the left;
      this.open = !this.open;
      this.symbol = '<<';
    }
  }

  constructor( 
    private teamService:TeamService, 
    private enrollmentsService:EnrollmentsService,
    private userService: UserService,
    private activityService: ActivityService,
    private sessionService: SessionService)
    {
      this.activities = activityService.getActivities();
      this.currentUser = this.userService.getCurrentUser(); // Implement a method in your UserService to get the current user.
    if (this.currentUser != null){
      this.teamId = this.currentUser.id_team;
    }
    this.users = this.userService.getAllUsers().filter((user => user.id_team === this.teamId));
    }

    onClick(activity_id:number){
      this.selectedActivity = this.activityService.getActivityById(activity_id);
      this.title = this.selectedActivity.name;
      this.session = this.sessionService.getSessionsForCurrentActivity(this.selectedActivity.id);
      console.log(this.session);
    };
}
