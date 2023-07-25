import { Component } from '@angular/core';
import { Activities } from 'src/app/activities';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent {

  activities: Activities[] = [
    new Activities(1, "Hiking"),
    new Activities(2, "Swimming"),
    new Activities(3, "Cooking class"),
    new Activities(4, "Painting"),
    new Activities(5, "Yoga")
  ];
}


