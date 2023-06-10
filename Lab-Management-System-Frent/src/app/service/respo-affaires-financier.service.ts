import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespoAffairesFinancier } from '../model/respoAffairesFinancier .model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/api/v1/respo-affaire-financiers`;
@Injectable({
  providedIn: 'root'
})
export class RespoAffairesFinancierService {

  constructor(private http: HttpClient) {}

  addRespoAffairesFinancier(respoAffairesFinancier: RespoAffairesFinancier): Observable<RespoAffairesFinancier> {
    return this.http.post<RespoAffairesFinancier>(baseUrl, respoAffairesFinancier);
  }

  getAllRespoAffairesFinancier(): Observable<RespoAffairesFinancier[]> {
    return this.http.get<RespoAffairesFinancier[]>(baseUrl);
  }

  getRespoAffairesFinancierById(id: number): Observable<RespoAffairesFinancier> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<RespoAffairesFinancier>(url);
  }

  updateRespoAffairesFinancier(id: number, respoAffairesFinancier: RespoAffairesFinancier): Observable<RespoAffairesFinancier> {
    const url = `${baseUrl}/${id}`;
    return this.http.put<RespoAffairesFinancier>(url, respoAffairesFinancier);
  }

  deleteRespoAffairesFinancier(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
