import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-content',
  templateUrl: './ongoing-content.component.html',
  styleUrls: ['./ongoing-content.component.scss']
})
export class OngoingContentComponent {
  

  containerPosition = 0; 
  open:boolean = true;

  moveContainerLeft() {
    if (this.open){
      this.containerPosition -= 20; 
      this.open = !this.open;
    }
    else {
      this.containerPosition += 20; 
      this.open = !this.open;
    }
  }
}
