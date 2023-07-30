import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/services/activity.service';
import { Grade, GradesService } from 'src/app/services/grades.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent {
  @Input() selectedActivity!:Activity;
  grades:Grade[] = [];
  currentUser:User = this.userService.getCurrentUser()!;


  constructor(private userService:UserService, private gradesService:GradesService){}
  ngOnInit() {
    this.grades = this.gradesService.getGradesByActivityAndUser(this.selectedActivity.id, this.currentUser.id);
    console.log(this.selectedActivity);
    console.log(this.currentUser.id);
    console.log(this.grades);
  }


}
