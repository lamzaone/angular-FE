import { Component } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  email: string = '';

  constructor(private userService: UserService,  private router: Router) {}

  onLogin() {
    const user = this.userService.getUserByEmail(this.email);

    if (user) {
      this.userService.setCurrentUser(user);
      console.log("Set current user to:" + user);
      this.router.navigate(['/' + user.role + '/Home']);
    } else {
      alert('User not found! Please enter a valid email.');
    }
  }
}
