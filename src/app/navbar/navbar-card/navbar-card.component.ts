import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-card',
  templateUrl: './navbar-card.component.html',
  styleUrls: ['./navbar-card.component.scss']
})
export class NavbarCardComponent {
  @Input() name!: string;
  constructor(private router: Router) { }
  
}
