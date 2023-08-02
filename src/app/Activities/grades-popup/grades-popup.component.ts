import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Grade } from 'src/app/services/grades.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-grades-popup',
  templateUrl: './grades-popup.component.html',
  styleUrls: ['./grades-popup.component.scss']
})
export class GradesPopupComponent {
  @Input() grade!: Grade;
  mentorName?: string;
  activityName?: string;
  @Output() seeGradeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private userService:UserService, private activityService:ActivityService){}

  ngOnInit() {
    
      this.mentorName = this.userService.getUserById(this.grade.id_mentor)?.name;
      this.activityName = this.activityService.getActivityById(this.grade.id_activity).name;
  }

  onClick(){
    this.seeGradeChange.emit(false); 
  }
}
