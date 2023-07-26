import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styleUrls: ['./side-menu-card.component.scss']
})
export class SideMenuCardComponent {
  @Input() name!: string;
}
