import { Component, Input } from '@angular/core';
import { Activities } from 'src/app/activities';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss']
})
export class ActivitiesCardComponent{

  @Input() activity!: Activities;

  constructor() {};
}
