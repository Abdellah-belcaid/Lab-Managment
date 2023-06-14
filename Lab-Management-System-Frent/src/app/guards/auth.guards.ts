import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';
import { showAlert } from '../utils/alertMessages';
import { Role } from '../model/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.currentUser) {
      // User is logged in
      if (route.data['roles']?.indexOf(this.currentUser.role) === -1) {
        // User does not have required role, redirect to appropriate URL based on role
        console.log("User does not have required role, redirect to appropriate URL based on role");
        showAlert('error', 'Error : NOT AUTHORIZED', 'you are not authorized to go to this link');
        return false;
      }
      if (state.url === '/') {
        if (this.currentUser.role === Role.ADMIN) {
          this.router.navigate(['/admin']);
        }
        if (this.currentUser.role === Role.DIRECTOR) {
          this.router.navigate(['/director']);
        }
        if (this.currentUser.role === Role.MEMBER) {
          this.router.navigate(['/membre']);
        }
      }
      return true;
    }

    this.router.navigate(['/login']);
    showAlert('error', 'Error : NOT Logged in ', ' You need to log in to access to pages !');
    return false;
  }

}
