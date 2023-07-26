import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-activity-card',
  templateUrl: './add-activity-card.component.html',
  styleUrls: ['./add-activity-card.component.scss'],
  
})
export class AddActivityCardComponent {
  @Input() text:string = '+';
}
