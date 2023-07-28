import { Injectable } from '@angular/core';

export class Activity {
  id: number;
  name: string;

  constructor(id: number, name:string){
    this.id = id;
    this.name = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[] = [
    new Activity(1, 'Hiking'),
    new Activity(2, 'Programming C'),
    new Activity(2, 'Programming Java'),
    new Activity(2, 'JavaScript'),
  ];

  constructor() { }

  
  getActivities(): Activity[] {
    return this.activities;
  }
}
