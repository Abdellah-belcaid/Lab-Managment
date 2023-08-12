import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

let actions: Array<any> = [
  { title: "", route: "", icon: "" },
  { title: "", route: "", icon: "" },
  { title: "", route: "", icon: "" },
]

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  currentUser: User = new User();


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }


  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
