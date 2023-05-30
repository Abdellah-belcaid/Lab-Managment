import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Membre } from '../model/membre.model';

const baseUrl = `${environment.apiUrl}/api/v1/members`;

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) { }

  addMembre(membre: Membre): Observable<Membre> {
    return this.http.post<Membre>(baseUrl, membre);
  }

  getAllMembres(): Observable<Membre[]> {
    return this.http.get<Membre[]>(baseUrl);
  }

  getMembreById(id: number): Observable<Membre> {
    return this.http.get<Membre>(`${baseUrl}/${id}`);
  }

  updateMembre(id: number, membre: Membre): Observable<Membre> {
    return this.http.put<Membre>(`${baseUrl}/${id}`, membre);
  }

  deleteMembre(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }

  getLaboratoireByMembreId(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}/laboratoire`);
  }

  getExpressionBesoinsByMembreId(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}/expressionbesoins`);
  }

  getDotationProjectsByMembreId(id: number): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${id}/dotationprojects`);
  }
}
