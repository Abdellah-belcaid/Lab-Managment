import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespoMarche } from '../model/respoMarche.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/api/v1/respo-marche`;
@Injectable({
  providedIn: 'root'
})
export class RespoMarcheService {


  constructor(private http: HttpClient) { }

  addRespoMarche(respoMarche: RespoMarche): Observable<RespoMarche> {
    return this.http.post<RespoMarche>(baseUrl, respoMarche);
  }

  getAllRespoMarche(): Observable<RespoMarche[]> {
    return this.http.get<RespoMarche[]>(baseUrl);
  }

  getRespoMarcheById(id: number): Observable<RespoMarche> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<RespoMarche>(url);
  }

  updateRespoMarche(id: number, respoMarche: RespoMarche): Observable<RespoMarche> {
    const url = `${baseUrl}/${id}`;
    return this.http.put<RespoMarche>(url, respoMarche);
  }

  deleteRespoMarche(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
