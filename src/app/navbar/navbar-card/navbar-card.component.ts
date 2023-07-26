import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-card',
  templateUrl: './navbar-card.component.html',
  styleUrls: ['./navbar-card.component.scss']
})
export class NavbarCardComponent {
  @Input() name!: string;



}
