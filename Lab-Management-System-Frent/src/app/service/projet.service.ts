import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projet } from '../model/projet.model';

import { environment } from 'src/environments/environment';
import { Dotation_Project } from '../model/dotationProject.model';

const baseUrl = `${environment.apiUrl}/api/v1/projets`;

@Injectable({
  providedIn: 'root'
})
export class ProjetService {


  constructor(private http: HttpClient) { }

  addProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(baseUrl, projet);
  }

  getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(baseUrl);
  }

  getProjetById(id: number): Observable<Projet> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Projet>(url);
  }

  updateProjet(id: number, projet: Projet): Observable<Projet> {
    const url = `${baseUrl}/${id}`;
    return this.http.put<Projet>(url, projet);
  }

  deleteProjet(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getDotationProjectsByProjetId(id: number): Observable<Dotation_Project[]> {
    const url = `${baseUrl}/${id}/dotationprojects`;
    return this.http.get<Dotation_Project[]>(url);
  }
}
