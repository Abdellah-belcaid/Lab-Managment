import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dotation_Project } from '../model/dotationProject.model';

const baseUrl = `${environment.apiUrl}/api/v1/dotation-projects`;

@Injectable({
  providedIn: 'root'
})
export class DotationProjetService {

  constructor(private http: HttpClient) { }

  public createDotation_Project(Dotation_Project: Dotation_Project): Observable<Dotation_Project> {
    return this.http.post<Dotation_Project>(baseUrl, Dotation_Project);
  }

  public getAllDotation_Projects(): Observable<Dotation_Project[]> {
    return this.http.get<Dotation_Project[]>(baseUrl);
  }

  public getDotation_ProjectById(projetId: number, membreId: number): Observable<Dotation_Project> {
    const url = `${baseUrl}/${projetId}/${membreId}`;
    return this.http.get<Dotation_Project>(url);
  }

  public deleteDotation_Project(projetId: number, membreId: number): Observable<void> {
    const url = `${baseUrl}/${projetId}/${membreId}`;
    return this.http.delete<void>(url);
  }

  // Add more methods as needed for your application

  getAllDotationProjectsByProjetId(projetId: number): Observable<Dotation_Project[]> {
    return this.http.get<Dotation_Project[]>(`${baseUrl}/projet/${projetId}`);
  }

  getAllDotationProjectsByMembreId(membreId: number): Observable<Dotation_Project[]> {
    return this.http.get<Dotation_Project[]>(`${baseUrl}/membre/${membreId}`);
  }
}
