import { Component, Input } from '@angular/core';
import { Grade } from 'src/app/services/grades.service';

@Component({
  selector: 'app-grades-card',
  templateUrl: './grades-card.component.html',
  styleUrls: ['./grades-card.component.scss']
})
export class GradesCardComponent {
  @Input() grade!:Grade;
  seeGrade: boolean = false;


  onClick(){
    this.seeGrade = !this.seeGrade;
  }
  onSeeGradeChange(seeGradeValue: boolean) {
    this.seeGrade = seeGradeValue;
  }
}
