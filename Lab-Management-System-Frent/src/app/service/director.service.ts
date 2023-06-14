import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Director } from '../model/director.model';

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

  updateDirector(id: number, director: Director): Observable<Director> {
    const url = `${baseUrl}/${id}`;
    return this.http.put<Director>(url, director);
  }
}
