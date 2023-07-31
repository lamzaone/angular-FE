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
  @Input() selectedUser:User = this.currentUser;
  noData:string = '';

  constructor(private userService:UserService, private gradesService:GradesService){}
  ngOnInit() {
    this.grades = this.gradesService.getGradesByActivityAndUser(this.selectedActivity.id, this.selectedUser.id);
    if (this.grades.length < 1) {
      this.noData='No data to show';
    }

    console.log(this.grades);
  }


}
