import { Component, Input } from '@angular/core';
import { Grade } from 'src/app/services/grades.service';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrls: ['./grades-card.component.scss']
})
export class GradesCardComponent {
  @Input() grade!:Grade;
}
