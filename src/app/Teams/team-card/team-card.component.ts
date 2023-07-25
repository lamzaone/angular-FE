import { Component, Input } from '@angular/core';
import { User } from 'src/app/users';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {

  @Input() user!: User;

  constructor(){};
}
