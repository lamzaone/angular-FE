import { EnrollmentsService } from './../../services/enrollments.service';
import { TeamService } from './../../services/team.service';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Activity, ActivityService } from 'src/app/services/activity.service';
import { Team } from 'src/app/services/team.service';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.scss']
})
export class ManagementListComponent {
  selectedActivityTeams: Team[] | null = this.teamService.getTeams();
  title:string = 'All teams'

  containerPosition = 0; 
  open:boolean = true;


  activities!: Activity[]
  route!: String;

  constructor(private teamService:TeamService, private activityService:ActivityService, private enrollmentsService:EnrollmentsService,
    private renderer: Renderer2, private elementRef: ElementRef){
    this.activities = activityService.getActivities();
  }


  onClick(activityID:number){
    this.selectedActivityTeams = null;
    this.selectedActivityTeams = this.enrollmentsService.getTeamsEnrolledInActivity(activityID);
    console.log(this.selectedActivityTeams);
  };


}
