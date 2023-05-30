import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etablissement } from '../model/etablissement.model';

const baseUrl = `${environment.apiUrl}/api/v1/etablissements`;


@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private http: HttpClient) { }

  addEtablissement(etablissement: Etablissement): Observable<Etablissement> {
    return this.http.post<Etablissement>(baseUrl, etablissement);
  }

  getAllEtablissements(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(baseUrl);
  }

  getEtablissementById(id: number): Observable<Etablissement> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Etablissement>(url);
  }

  updateEtablissement(id: number, etablissement: Etablissement): Observable<Etablissement> {
    const url = `${baseUrl}/${id}`;
    return this.http.put<Etablissement>(url, etablissement);
  }

  deleteEtablissement(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
