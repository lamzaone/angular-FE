import { Component } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  
  users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
  }
}
