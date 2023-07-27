import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  getPagesByRole(role: string): string[] {
    switch (role) {
      case 'Mentor':
        return ['Home', 'Ongoing', 'Management'];
      case 'Student':
        return ['Home', 'Activities', 'Team'];
      default:
        return [];
    }
  }
  
  role: string = 'Mentor';
  pages: string[] = this.getPagesByRole(this.role);
}