import { Component, Input } from '@angular/core';
import { User , UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {

  @Input() user!: User;

  constructor(){};
}
