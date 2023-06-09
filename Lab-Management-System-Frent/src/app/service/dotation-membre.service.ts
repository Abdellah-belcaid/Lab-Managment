import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dotation_Membre } from '../model/dotationMembre.model';

const baseUrl = `${environment.apiUrl}/api/v1/dotation-membres`;

@Injectable({
  providedIn: 'root'
})
export class Dotation_MembreService {

  constructor(private http: HttpClient) { }

  public addDotation_Membre(Dotation_Membre: Dotation_Membre): Observable<Dotation_Membre> {
    console.log(Dotation_Membre);
    return this.http.post<Dotation_Membre>(baseUrl, Dotation_Membre);
  }

  public updateDotation_Membre(Dotation_Membre: Dotation_Membre): Observable<Dotation_Membre> {
    return this.http.put<Dotation_Membre>(baseUrl, Dotation_Membre);
  }

  public deleteDotation_Membre(ucaRechId: number, membreId: number): Observable<void> {
    const url = `${baseUrl}/${ucaRechId}/${membreId}`;
    return this.http.delete<void>(url);
  }

  public getDotation_MembreById(ucaRechId: number, membreId: number): Observable<Dotation_Membre> {
    const url = `${baseUrl}/${ucaRechId}/${membreId}`;
    return this.http.get<Dotation_Membre>(url);
  }

  public getAllDotation_Membres(): Observable<Dotation_Membre[]> {
    return this.http.get<Dotation_Membre[]>(baseUrl);
  }

  getAllDotationMembresByUcaRechId(ucaRechId: number): Observable<Dotation_Membre[]> {
    return this.http.get<Dotation_Membre[]>(`${baseUrl}/uca-rech/${ucaRechId}`);
  }

  getAllDotationMembresByMembreId(membreId: number): Observable<Dotation_Membre[]> {
    return this.http.get<Dotation_Membre[]>(`${baseUrl}/membre/${membreId}`);
  }
}
