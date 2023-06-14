import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Membre } from 'src/app/model/membre.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-dashboard-membre',
  templateUrl: './dashboard-membre.component.html',
  styleUrls: ['./dashboard-membre.component.css']
})
export class DashboardMembreComponent {
  currentUser: Membre = new Membre();


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
