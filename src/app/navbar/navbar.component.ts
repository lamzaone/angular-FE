import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  role: string = '';
  pages: string[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();

    if (currentUser) {
      this.role = currentUser.role;
      this.pages = this.getPagesByRole(this.role);
    } else {      
      // this.pages = this.getPagesByRole('Mentor'); // FOR LOADING NAVBAR WITHOUT LOGIN SO I CAN CHECK THROUGH PAGES WITHOUT IT BEING A PAIN
      this.router.navigate(['/LogIn']); // LOGIN CHECK DISABLED CAUSE ITS ANNOYING ASF TO TEST WITH IT ON
    }
  }


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
}