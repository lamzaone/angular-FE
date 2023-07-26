import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent {
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

