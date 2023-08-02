import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity, ActivityService } from 'src/app/services/activity.service';
@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent {
  activities!: Activity[]
  route!: String;
  constructor(private activityService:ActivityService, private router:Router){
    this.route=this.router.url;
    
    console.log(this.route);
    this.activities = activityService.getActivities();
  }
  
  containerPosition = 0;
  open:boolean = true;
  symbol:string = '<<';

  moveContainerLeft() {
    if (this.open){
      this.containerPosition -= 20; 
      
      this.symbol = '>>';
      this.open = !this.open;
    }
    else {
      this.containerPosition += 20;
      this.open = !this.open;
      this.symbol = '<<';
    }
  }


}

