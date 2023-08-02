import { Component } from '@angular/core';
import { Activity } from 'src/app/services/activity.service';
import { Session, SessionService } from 'src/app/services/session.service';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mentor-dash-board',
  templateUrl: './mentor-dash-board.component.html',
  styleUrls: ['./mentor-dash-board.component.scss']
})
export class MentorDashBoardComponent {
  name?: string;
  ongoingActivities?: Activity[];
  constructor (private userService:UserService, private sessionService:SessionService) {
      const user = this.userService.getCurrentUser();
      if (user) {
        this.name = ', '+ user.name+'!';
      }

  }

  ngOnInit() {
    this.ongoingActivities = this.sessionService.getActivitiesWithSessionsForToday();
  }


}
