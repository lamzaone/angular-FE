import { Component } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  
  users: User[];
  currentUser: User | null; // Property to hold the current user.

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
    this.currentUser = this.userService.getCurrentUser(); // Implement a method in your UserService to get the current user.

    for (const user of this.users){
      if (user.id === this.currentUser?.id) {
        if (user.name.match("(YOU)")) {
          break;
        }
        else user.name += " (YOU)";
      }
    }
  }
}
