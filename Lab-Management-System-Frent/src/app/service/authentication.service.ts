import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


const baseUrl = `${environment.apiUrl}/api/v1/users`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    let storageUser;
    const storageUserAsStr = localStorage.getItem("currentUser");
    if (storageUserAsStr) {
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(user: User): Observable<any> {
    return this.http.post<any>(`${baseUrl}/sign-in`, user).pipe(
      map((response: any) => {
        if (response) {
          const userData = response;
          console.log(userData)
          localStorage.setItem('currentUser', JSON.stringify(userData));
        }
        return response;
      })
    );
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  setUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
