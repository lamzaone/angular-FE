import { Component } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mentor-dash-board',
  templateUrl: './mentor-dash-board.component.html',
  styleUrls: ['./mentor-dash-board.component.scss']
})
export class MentorDashBoardComponent {
  name?: string;
  constructor (private userService:UserService) {
      const user = this.userService.getCurrentUser();
      if (user) {
        this.name = ', '+ user.name+'!';
      }
  }

}
