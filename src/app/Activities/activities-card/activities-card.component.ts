import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss']
})
export class ActivitiesCardComponent{

  @Input() activity!: Activity;
  @Input() isLeader!: boolean;
  seeGrades:boolean = false;

  constructor() {
    
    console.log(this.isLeader);
  };

  onClick(){
    this.seeGrades = !this.seeGrades;
  }
}
