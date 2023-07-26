import { Component } from '@angular/core';
import { User } from 'src/app/users';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  
  users: User[] = [
    new User(1, "John Doe", "john@example.com", "Team-Leader"),
    new User(2, "Jane Smith", "jane@example.com", "Student"),
    new User(3, "Michael Johnson", "michael@example.com", "Student"),
    new User(4, "Emily Brown", "emily@example.com", "Student"),
    new User(5, "David Lee", "david@example.com", "Student"),
  ];
}
