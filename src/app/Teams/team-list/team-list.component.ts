import { Component } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  
  users: User[];
  teamId: number | null = null;
  currentUser: User | null; // Property to hold the current user.
  username: string = '';
  constructor(private userService: UserService) {
    
    this.currentUser = this.userService.getCurrentUser(); // Implement a method in your UserService to get the current user.
    if (this.currentUser != null){
      this.teamId = this.currentUser.id_team;
    }
    this.users = this.userService.getAllUsers().filter((user => user.id_team === this.teamId));
  }
}
