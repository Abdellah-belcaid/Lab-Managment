import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from '../model/director.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/api/v1/directors`;

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(private http: HttpClient) { }

  getAllDirectors(): Observable<Director[]> {
    return this.http.get<Director[]>(baseUrl);
  }

  getDirectorById(id: number): Observable<Director> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Director>(url);
  }

  createDirector(director: Director): Observable<Director> {
    return this.http.post<Director>(baseUrl, director);
  }

  deleteDirector(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
