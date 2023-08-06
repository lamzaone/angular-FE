import { UserService } from './../../services/user.service';
import { Component, Input } from '@angular/core';
import { Activity, ActivityService } from 'src/app/services/activity.service';
import { EnrollmentsService } from 'src/app/services/enrollments.service';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss']
})
export class ActivitiesCardComponent{

  @Input() activity!: Activity;
  @Input() isLeader!: boolean;
  seeGrades:boolean = false;

  constructor(private enrollmentsService:EnrollmentsService, private userService:UserService) {
    
    console.log(this.isLeader);
  };

  onClick(){
    this.seeGrades = !this.seeGrades;
  }

  onClickRemove(){
    this.enrollmentsService.removeEnrollment(this.activity.id, this.userService.getCurrentUser()!.id_team!);
  }
}
