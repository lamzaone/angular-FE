import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu-list',
  templateUrl: './side-menu-list.component.html',
  styleUrls: ['./side-menu-list.component.scss']
})
export class SideMenuListComponent {
  containerPosition = 0; // Initial position value (0 means no movement)

  moveContainerLeft() {
    this.containerPosition -= 0; // Move the container 80px to the left
  }


}
