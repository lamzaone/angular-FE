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
    new User(2, "Jane Smith", "jane@example.com", "Member"),
    new User(3, "Michael Johnson", "michael@example.com", "Member"),
    new User(4, "Emily Brown", "emily@example.com", "Member"),
    new User(5, "David Lee", "david@example.com", "Member"),
  ];
}
