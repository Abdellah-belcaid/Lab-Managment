import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laboratoire } from '../model/laboratoire.model';

const baseUrl = `${environment.apiUrl}/api/v1/laboratoires`;

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  constructor(private http: HttpClient) { }

  addLaboratoire(laboratoire: Laboratoire): Observable<Laboratoire> {
    console.log(laboratoire);
    return this.http.post<Laboratoire>(baseUrl, laboratoire);
  }

  getAllLaboratoires(): Observable<Laboratoire[]> {
    return this.http.get<Laboratoire[]>(baseUrl);
  }

  getLaboratoireById(id: number): Observable<Laboratoire> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Laboratoire>(url);
  }

  updateLaboratoire(id: number, laboratoire: Laboratoire): Observable<Laboratoire> {
    console.log(laboratoire);
    const url = `${baseUrl}/${id}`;
    return this.http.put<Laboratoire>(url, laboratoire);
  }

  deleteLaboratoire(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
