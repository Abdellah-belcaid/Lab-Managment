import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Director } from 'src/app/model/director.model';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-dashboard-director',
  templateUrl: './dashboard-director.component.html',
  styleUrls: ['./dashboard-director.component.css']
})
export class DashboardDirectorComponent {

  currentUser: Director = new Director();


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = Object.assign(this.currentUser, data);
      console.log(data);
    });
  }


  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
