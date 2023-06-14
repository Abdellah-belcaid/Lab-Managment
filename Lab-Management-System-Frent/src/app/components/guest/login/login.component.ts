import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/role.enum';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { getStatusName, showAlert } from 'src/app/utils/alertMessages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  login(): void {
    this.authService.login(this.user).subscribe(
      (response: User) => {
        // Handle successful login
        console.log('Login successful', response);
        showAlert('success', 'Success', 'Login successful !\n  welcome  ' + response.name);
        console.log(this.authService.currentUser);
        // Redirect or perform any necessary actions
        this.router.navigate(['']);
      },
      (error) => {
        // Handle login error
        showAlert('error', `Error: ${getStatusName(error.status)}`, `${error.message}`);
        console.log('Login failed', error);
        // Display error message or perform any necessary actions
      }
    );
  }

}
