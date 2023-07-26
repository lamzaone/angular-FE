import { Component } from '@angular/core';
import { Activities } from 'src/app/activities';
@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent {
  
  activities: Activities[] = [
    new Activities(1, "Hiking"),
    new Activities(2, "Swimming"),
    new Activities(3, "Cooking class"),
    new Activities(4, "Painting"),
    new Activities(4, "Painting"),
    new Activities(4, "Painting"),
    new Activities(4, "Painting"),
    new Activities(4, "Painting"),
    new Activities(4, "Painting"),
    new Activities(5, "Yoga")
  ];
  
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


}

