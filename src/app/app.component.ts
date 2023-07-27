import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IBM';
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
